import type { Metadata } from "next";
import { withPageMeta } from "@/lib/site-metadata";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = withPageMeta("/towing/heavy-duty-towing", {
  title: { absolute: "Heavy Duty Towing Columbia, SC | KM Truck & Trailer" },
  description:
    "Heavy-duty and rotator towing for loaded semis and Class 7–8 trucks in Columbia, SC and the Midlands. Safe recovery and 24/7 dispatch.",
});

export default function Page() {
  return <TowingServicePage slug="heavy-duty-towing" />;
}
