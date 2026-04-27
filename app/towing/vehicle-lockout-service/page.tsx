import type { Metadata } from "next";
import { withPageMeta } from "@/lib/site-metadata";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = withPageMeta("/towing/vehicle-lockout-service", {
  title: { absolute: "Vehicle Lockout Service | Columbia, SC | KM Truck & Trailer" },
  description:
    "Fast and reliable vehicle lockout service in Columbia, SC. KM Truck & Trailer provides 24/7 emergency help to unlock your vehicle quickly and safely.",
});

export default function Page() {
  return <TowingServicePage slug="vehicle-lockout-service" />;
}
