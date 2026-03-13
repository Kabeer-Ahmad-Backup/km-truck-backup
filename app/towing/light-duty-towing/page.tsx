import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Light Duty Towing Columbia, SC | KM Truck & Trailer",
  description:
    "Light commercial towing—pickups, vans, box trucks—in Columbia and Richland County. Call (803) 393-4907.",
};

export default function Page() {
  return <TowingServicePage slug="light-duty-towing" />;
}
