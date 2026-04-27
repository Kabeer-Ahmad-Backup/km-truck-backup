import ServicePageTemplate from "../components/ui/ServicePageTemplate";
import { towingPages, type TowingSlug } from "./towing-data";

export default function TowingServicePage({ slug }: { slug: TowingSlug }) {
  const p = towingPages[slug];
  return (
    <ServicePageTemplate
      title={p.title}
      heroSubtitle={p.heroSubtitle}
      bodyIntro={p.bodyIntro}
      bodyContent={p.bodyContent}
      articleSections={p.articleSections}
      features={[...p.features]}
      faqItems={[...p.faqItems]}
      relatedServices={[
        { label: "Towing hub", href: "/towing" },
        { label: "Emergency Roadside", href: "/emergency-roadside-repair" },
        { label: "Contact", href: "/contact-us" },
      ]}
      images={["/why_us_banner.jpg", "/hero-truck-white.png"]}
      imageLayout="grid"
    />
  );
}
