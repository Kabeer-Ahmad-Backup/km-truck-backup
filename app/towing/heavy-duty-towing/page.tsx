import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Heavy Duty Towing Columbia, SC | KM Truck & Trailer",
  description:
    "Heavy-duty & rotator towing for loaded semis and Class 7–8 trucks in Columbia, SC and the Midlands.",
};

export default function Page() {
  return <TowingServicePage slug="heavy-duty-towing" />;
}
