import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { towingHubArticleSections } from "@/lib/service-articles/april-2026-seo-pages";
import { withPageMeta } from "@/lib/site-metadata";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = withPageMeta("/towing", {
  title: { absolute: "Towing & Roadside Recovery in Columbia, SC | KM Truck & Trailer" },
  description:
    "KM Truck & Trailer provides fast and reliable towing and roadside recovery services in Columbia, SC. Trust our expert team for emergency assistance, anywhere, anytime.",
});

const links = [
  { href: "/towing/emergency-towing", label: "Emergency Towing" },
  { href: "/towing/heavy-duty-towing", label: "Heavy Duty Towing" },
  { href: "/towing/light-duty-towing", label: "Light Duty Towing" },
  { href: "/towing/semi-truck-towing", label: "Semi Truck Towing" },
  { href: "/towing/flatbed-towing", label: "Flatbed Towing" },
  { href: "/towing/roadside-assistance", label: "Roadside Assistance" },
  { href: "/towing/fuel-delivery", label: "Fuel Delivery" },
  { href: "/towing/tire-change-service", label: "Tire Change Service" },
  { href: "/towing/jump-start-service", label: "Jump Start Service" },
  { href: "/towing/vehicle-lockout-service", label: "Vehicle Lockout Service" },
];

export default function TowingHubPage() {
  return (
    <ServicePageTemplate
      title="Towing & Roadside Recovery in Columbia, SC"
      heroSubtitle="KM Truck & Trailer provides fast and reliable towing and roadside recovery services in Columbia, SC. Trust our expert team for emergency assistance, anywhere, anytime."
      articleSections={towingHubArticleSections}
      bodyIntro="Breakdowns don’t wait for business hours. K&M Truck & Trailer Repair provides towing and roadside recovery tailored to commercial trucks and fleets in Columbia, SC—from quick jump-starts and fuel drops to full heavy-duty tows on I-26, I-77, and I-20."
      bodyContent="Choose a service below—each page has full details for Columbia, SC and the Midlands. Open any service for full information. Same dispatch for every need: (803) 393-4907—we route the right equipment for your situation."
      bodyAfterContent={
        <div style={{ marginTop: "24px", marginBottom: "32px" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#111827", marginBottom: "16px" }}>
            Towing services (Columbia, SC)
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "10px" }}>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    background: "#F8F9FB",
                    borderRadius: "12px",
                    border: "1px solid #E5E9EF",
                    color: "#1E293B",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                  <ArrowRight size={18} color="#2563EB" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      }
      features={[
        "10 dedicated service pages",
        "Columbia & Midlands",
        "24/7 Dispatch",
        "Commercial & semi focus",
        "I-26 / I-77 / I-20",
        "Heavy & light duty",
        "Flatbed & roadside",
        "Fuel · tires · jump · lockout",
      ]}
      faqItems={[
        {
          question: "Why separate pages for each towing service?",
          answer:
            "So you can read exactly what you need—emergency tow vs fuel delivery—without scrolling one long page. Same phone number for all.",
        },
        {
          question: "Do you tow in Columbia, SC 24/7?",
          answer: "Yes. Call (803) 393-4907 anytime.",
        },
        {
          question: "Can you tow a loaded semi?",
          answer:
            "Yes—see Heavy Duty Towing and Semi Truck Towing pages. Tell dispatch weight and configuration.",
        },
      ]}
      relatedServices={[
        { label: "Emergency Roadside", href: "/emergency-roadside-repair" },
        { label: "Fuel Delivery (site)", href: "/fuel-delivery" },
        { label: "Lockouts", href: "/lockouts" },
      ]}
      images={["/why_us_banner.jpg", "/hero-truck-white.png"]}
      imageLayout="grid"
    />
  );
}
