import type { Metadata } from "next";
import { withPageMeta } from "@/lib/site-metadata";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = withPageMeta("/towing/flatbed-towing", {
  title: { absolute: "Flatbed Towing Columbia, SC | KM Truck & Trailer" },
  description:
    "Flatbed towing for sensitive loads, low ground clearance, and all-wheel vehicles in Columbia, SC. Level-deck, secure transport—24/7 dispatch.",
});

export default function Page() {
  return <TowingServicePage slug="flatbed-towing" />;
}
