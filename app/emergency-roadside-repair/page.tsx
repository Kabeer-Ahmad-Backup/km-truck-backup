import type { Metadata } from "next";
import { emergencyRoadsideArticleSections } from "@/lib/service-articles/april-2026-seo-pages";
import { withPageMeta } from "@/lib/site-metadata";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = withPageMeta("/emergency-roadside-repair", {
  title: { absolute: "Fast Emergency Truck Roadside Repair | Columbia, SC | KM Truck & Trailer" },
  description:
    "Get fast emergency truck roadside repair in Columbia, SC. KM Truck & Trailer provides 24/7 mobile assistance for breakdowns, towing and repairs available.",
});

export default function Page() {
  return (
    <ServicePageTemplate
      title="Fast Emergency Truck Roadside Repair in Columbia, SC"
      heroSubtitle="Get fast emergency truck roadside repair in Columbia, SC. KM Truck & Trailer provides 24/7 mobile assistance for breakdowns, towing and repairs available."
      articleSections={emergencyRoadsideArticleSections}
      bodyIntro="A flat or fault can stop your trip and cost time and money. Our emergency truck and trailer repair team in Columbia, SC keeps you moving. We fix tires, brakes, air leaks, and more on-site - quickly and anytime."
      bodyContent="From wheel hubs to air lines, our skilled technicians handle rigs and trailers at your location in any weather, all year round. You stay on track with safe and reliable roadside repairs."
      features={["Flat Tire Repair","Brake Repair","Air Line Leaks","Jump-Start Service","Fuel Delivery","Wheel Hub Repair","24/7 Any Weather","Fast Dispatch"]}
      faqItems={[{"question":"How fast can you reach me?","answer":"We aim to arrive within 60 minutes for most locations in and around Columbia, SC. We dispatch immediately upon your call."},{"question":"What can you fix roadside?","answer":"We repair tires, brakes, air leaks, electrical faults, jump-starts, fuel delivery, hub issues, and many other mechanical failures roadside."},{"question":"Do you serve all of South Carolina?","answer":"Yes! Our mobile units serve all of South Carolina with primary coverage along I-77, I-26, and I-20 corridors."},{"question":"Is emergency service available on holidays?","answer":"Yes - our emergency team is available 24 hours a day, 365 days a year, including all holidays."}]}
      relatedServices={[{"label":"Fuel Delivery","href":"/fuel-delivery"},{"label":"Tires","href":"/tires"},{"label":"Brakes","href":"/brakes"}]}
    />
  );
}
