import type { Metadata } from "next";
import { withPageMeta } from "@/lib/site-metadata";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = withPageMeta("/towing/emergency-towing", {
  title: { absolute: "Emergency Towing Columbia, SC | KM Truck & Trailer" },
  description:
    "KM Truck & Trailer offers 24/7 emergency towing services in Columbia, SC. Whether it's a breakdown or an accident, our experienced team is ready to assist you quickly and efficiently.",
});

export default function Page() {
  return <TowingServicePage slug="emergency-towing" />;
}
