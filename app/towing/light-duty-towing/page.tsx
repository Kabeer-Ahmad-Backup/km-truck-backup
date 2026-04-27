import type { Metadata } from "next";
import { withPageMeta } from "@/lib/site-metadata";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = withPageMeta("/towing/light-duty-towing", {
  title: { absolute: "Light Duty Towing in Columbia, SC | KM Truck & Trailer" },
  description:
    "KM Truck & Trailer provides reliable light-duty towing services in Columbia, SC. From cars to small trucks, our experienced team ensures a safe and efficient towing experience whenever you need it.",
});

export default function Page() {
  return <TowingServicePage slug="light-duty-towing" />;
}
