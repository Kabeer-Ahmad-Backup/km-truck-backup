import type { Metadata } from "next";
import { trailerElectricalAcArticleSections } from "@/lib/service-articles/april-2026-seo-pages";
import { withPageMeta } from "@/lib/site-metadata";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = withPageMeta("/trailer-electrical-a-c-overhaul-services", {
  title: { absolute: "Trailer Electrical & AC Overhaul Services in SC | KM Truck & Trailer" },
  description:
    "KM Truck & Trailer offers expert trailer electrical and AC overhaul services in South Carolina. Ensure your trailer's performance with our reliable, efficient, and affordable solutions.",
});

export default function Page() {
  return (
    <ServicePageTemplate
      title="Trailer Electrical & AC Overhaul Services in SC"
      heroSubtitle="KM Truck & Trailer offers expert trailer electrical and AC overhaul services in South Carolina. Ensure your trailer's performance with our reliable, efficient, and affordable solutions."
      articleSections={trailerElectricalAcArticleSections}
      bodyIntro="Trailers have complex electrical systems of their own - from lighting and brake controllers to refrigeration units and liftgate power systems. Our technicians specialize in comprehensive trailer electrical diagnostics and repair."
      bodyContent="We perform complete trailer electrical overhauls including ABS wiring, lighting rewires, connector replacement, and refrigeration unit electrical service. All work is DOT-compliant and fully inspected."
      features={["Trailer Wiring Overhaul","ABS System Repair","Lighting Systems","Brake Controller","Connector Replacement","Refrigeration Electrical","Liftgate Electrical","DOT Compliance"]}
      faqItems={[{"question":"Do you diagnose trailer ABS issues?","answer":"Yes. We diagnose and repair trailer anti-lock brake system (ABS) electrical faults including wheel sensors and control modules."},{"question":"Can you rewire my trailer lighting?","answer":"Yes, we perform complete trailer lighting rewires, connector upgrades, and LED lighting conversions."},{"question":"Do you service refrigerated trailer electrics?","answer":"Yes, we service the electrical systems of refrigerated trailers including power connections, temperature controllers, and wiring."},{"question":"Is DOT lighting compliance guaranteed?","answer":"Yes. All lighting work meets or exceeds DOT requirements. We provide documentation for your records."}]}
      relatedServices={[{"label":"Trailer Repair","href":"/trailer-repair"},{"label":"Electrical Repair","href":"/electrical"},{"label":"Liftgate Repair","href":"/liftgate-repair"}]}
    />
  );
}
