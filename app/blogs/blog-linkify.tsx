import React from "react";

const STOPWORDS = new Set([
  "a",
  "an",
  "and",
  "at",
  "by",
  "for",
  "in",
  "of",
  "on",
  "or",
  "the",
  "to",
]);

/**
 * Turns `anchor(https://example.com/path)` in plain text into external links.
 * Anchor text is the run of words immediately before the opening parenthesis,
 * stopping before common stopwords (so "and trailer(" links only "trailer").
 */
export function linkifyBlogText(text: string): React.ReactNode {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  const re = /\((https?:\/\/[^)]+)\)/g;
  let m: RegExpExecArray | null;
  let key = 0;

  while ((m = re.exec(text)) !== null) {
    const openIdx = m.index;
    const closeIdx = openIdx + m[0].length;
    const url = m[1];

    let i = openIdx - 1;
    while (i >= last && /\s/.test(text[i])) i--;
    while (i >= last && /[,;.:]/.test(text[i])) i--;
    const anchorEnd = i + 1;
    if (i < last) {
      nodes.push(text.slice(last, closeIdx));
      last = closeIdx;
      continue;
    }

    let right = i;
    let left = i;
    for (;;) {
      while (left >= last && /[a-zA-Z0-9&'/-]/.test(text[left])) left--;
      const wordStart = left + 1;
      if (left >= last && text[left] === " ") {
        let prevRight = left - 1;
        if (prevRight < last) break;
        let prevLeft = prevRight;
        while (prevLeft >= last && /[a-zA-Z0-9&'/-]/.test(text[prevLeft])) prevLeft--;
        const prevRaw = text.slice(prevLeft + 1, prevRight + 1);
        const prevNorm = prevRaw.replace(/[,;.:]+$/g, "").toLowerCase();
        if (STOPWORDS.has(prevNorm)) break;
        if (/^[A-Z0-9]/.test(prevRaw) || /\d/.test(prevRaw)) {
          left = prevLeft;
          continue;
        }
        if (prevRaw.length >= 6 && /^[a-z]/.test(prevRaw)) {
          left = prevLeft;
          continue;
        }
        break;
      }
      break;
    }

    const anchorStart = left + 1;
    const anchor = text
      .slice(anchorStart, anchorEnd)
      .replace(/[,;.:]+$/g, "")
      .trim();

    if (!anchor) {
      nodes.push(text.slice(last, closeIdx));
      last = closeIdx;
      continue;
    }

    nodes.push(text.slice(last, anchorStart));
    nodes.push(
      <a
        key={key++}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="blog-inline-link"
      >
        {anchor}
      </a>
    );
    last = closeIdx;
  }

  nodes.push(text.slice(last));
  return <>{nodes}</>;
}
