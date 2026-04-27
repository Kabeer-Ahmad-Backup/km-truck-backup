import type { Metadata } from "next";
import { withPageMeta } from "@/lib/site-metadata";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = withPageMeta("/towing/semi-truck-towing", {
  title: { absolute: "Semi Truck Towing in Columbia, SC | KM Truck & Trailer" },
  description:
    "KM Truck & Trailer offers professional semi truck towing services in Columbia, SC. Our expert team is available 24/7 to handle heavy-duty towing with speed and safety.",
});

export default function Page() {
  return <TowingServicePage slug="semi-truck-towing" />;
}
