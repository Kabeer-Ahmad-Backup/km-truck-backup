import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Vehicle Lockout Service Columbia, SC | KM Truck & Trailer",
  description:
    "Cab & trailer lockout service in Columbia, SC. Professional entry, no damage. Commercial vehicles.",
};

export default function Page() {
  return <TowingServicePage slug="vehicle-lockout-service" />;
}
