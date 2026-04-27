import type { ContentBlock } from "./blog-types";

const NOT_HEADING_START =
  /^(In |When |If |Your |Trucks |Truck |Modern |Maintaining |Having |Investing |Whether |Breakdowns |Running |A |The truck|Professional |Heavy-duty|Fleet |Recognizing|Selecting|Timing|Speed|Unexpected|Signs |Choosing|Silent|Simple|Sudden|These |This |At |Our|We |From |With |For fleet|Selecting the|Getting started|You |They |It |This type|Sometimes|Just like|Over time|During |After |Before |While |Because |Since |Although |However |Additionally |Furthermore |Finally )/i;

function looksLikeHeading(line: string): boolean {
  const t = line.trim();
  if (t.length > 130) return false;
  if (/^\d+\./.test(t)) return false;
  if (/[.?!:]$/.test(t)) return false;
  if (NOT_HEADING_START.test(t)) return false;
  return true;
}

function headingLevel(line: string): "h2" | "h3" {
  const t = line.trim();
  if (t.length <= 52 && /&/.test(t)) return "h3";
  if (t.length <= 48 && !/^(FAQs|Types of|How to|Choosing|Benefits)/.test(t)) return "h3";
  return "h2";
}

/**
 * Split double-newline paragraphs into blog blocks. FAQ items use "N. Question\\nAnswer".
 */
export function paragraphsToBlocks(raw: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const chunks = raw.trim().split(/\n\n+/);

  for (const chunk of chunks) {
    const t = chunk.trim();
    if (!t) continue;

    if (/^\d+\.\s/.test(t)) {
      const nl = t.indexOf("\n");
      if (nl !== -1) {
        const head = t.slice(0, nl).trim();
        const body = t.slice(nl + 1).trim().replace(/\s+/g, " ");
        blocks.push({ type: "h3", text: head });
        if (body) blocks.push({ type: "p", text: body });
        continue;
      }
    }

    const singleLine = !t.includes("\n");
    const firstLine = t.split("\n")[0].trim();

    if (singleLine && looksLikeHeading(firstLine)) {
      blocks.push({ type: headingLevel(firstLine), text: firstLine });
    } else {
      blocks.push({ type: "p", text: t.replace(/\n/g, " ") });
    }
  }

  return blocks;
}
