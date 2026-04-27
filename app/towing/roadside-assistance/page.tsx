import type { Metadata } from "next";
import { withPageMeta } from "@/lib/site-metadata";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = withPageMeta("/towing/roadside-assistance", {
  title: { absolute: "Roadside Assistance Columbia, SC | KM Truck & Trailer" },
  description:
    "Commercial roadside assistance in Columbia, SC: air leaks, belts, hoses, and diagnostics. Mobile triage to get you moving—and a tow if needed.",
});

export default function Page() {
  return <TowingServicePage slug="roadside-assistance" />;
}
