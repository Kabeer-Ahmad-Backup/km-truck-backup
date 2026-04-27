import type { Metadata } from "next";
import { withPageMeta } from "@/lib/site-metadata";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = withPageMeta("/towing/tire-change-service", {
  title: { absolute: "24/7 Tire Change Service | Columbia, SC | KM Truck & Trailer" },
  description:
    "Need a fast tire change in Columbia, SC? KM Truck & Trailer offers 24/7 roadside tire service for trucks and cars. Quick, reliable help when you need it.",
});

export default function Page() {
  return <TowingServicePage slug="tire-change-service" />;
}
