import type { Metadata } from "next";
import { withPageMeta } from "@/lib/site-metadata";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = withPageMeta("/towing/fuel-delivery", {
  title: { absolute: "24/7 Fuel Delivery Service | Columbia, SC | KM Truck & Trailer" },
  description:
    "Fast 24/7 fuel delivery in Columbia, SC by KM Truck & Trailer. Quick response, diesel and gas delivery for trucks and cars when available. Call (803) 393-4907 for help.",
});

export default function Page() {
  return <TowingServicePage slug="fuel-delivery" />;
}
