import type { Metadata } from "next";
import { liftgateArticleSections } from "@/lib/service-articles/april-2026-seo-pages";
import { withPageMeta } from "@/lib/site-metadata";
import ServicePageTemplate from "../components/ui/ServicePageTemplate";

export const metadata: Metadata = withPageMeta("/liftgate-repair", {
  title: { absolute: "Liftgate Repair & Maintenance in SC | KM Truck & Trailer" },
  description:
    "KM Truck & Trailer provides professional liftgate repair and maintenance services throughout South Carolina. Count on our skilled technicians for quick, reliable, and affordable solutions.",
});

export default function Page() {
  return (
    <ServicePageTemplate
      title="Liftgate Repair & Maintenance in SC"
      heroSubtitle="KM Truck & Trailer provides professional liftgate repair and maintenance services throughout South Carolina. Count on our skilled technicians for quick, reliable, and affordable solutions."
      articleSections={liftgateArticleSections}
      bodyIntro="A malfunctioning liftgate can bring your delivery operation to a standstill. Our technicians repair hydraulic systems, electrical components, platform mechanisms, and safety features on all major liftgate brands."
      bodyContent="We service Maxon, Waltco, Anthony, Tommy Gate, and other major liftgate brands. Safety is our priority - every liftgate repair includes a full safety inspection and weight capacity verification."
      features={["Hydraulic Repair","Electrical Service","Platform Repair","Safety Inspection","All Major Brands","Weight Capacity Check","Control Repair","Mobile Service"]}
      faqItems={[{"question":"What liftgate brands do you service?","answer":"We service all major brands including Maxon, Waltco, Anthony, Tommy Gate, Thieman, and more."},{"question":"Can you repair hydraulic liftgate leaks?","answer":"Yes. Hydraulic leaks are a common issue. We locate the leak, replace seals or cylinders, and refill fluid."},{"question":"Is liftgate safety inspection included?","answer":"Yes, every liftgate repair includes a full safety inspection and operational test before we return your vehicle."},{"question":"Do you offer mobile liftgate repair?","answer":"Yes, most liftgate repairs can be performed at your location with our mobile technicians."}]}
      relatedServices={[{"label":"Trailer Door","href":"/trailer-door"},{"label":"Trailer Repair","href":"/trailer-repair"},{"label":"Electrical Repair","href":"/electrical"}]}
    />
  );
}
