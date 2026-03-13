import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Flatbed Towing Columbia, SC | KM Truck & Trailer",
  description:
    "Flatbed towing for sensitive loads and low clearance in Columbia, SC. Level deck secure transport.",
};

export default function Page() {
  return <TowingServicePage slug="flatbed-towing" />;
}
