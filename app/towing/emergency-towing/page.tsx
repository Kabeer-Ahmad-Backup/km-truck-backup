import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Emergency Towing Columbia, SC | KM Truck & Trailer",
  description:
    "24/7 emergency towing on I-26, I-77, Columbia metro. Commercial trucks & semis. Call (803) 393-4907.",
};

export default function Page() {
  return <TowingServicePage slug="emergency-towing" />;
}
