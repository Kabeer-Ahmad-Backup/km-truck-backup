import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Semi Truck Towing Columbia, SC | KM Truck & Trailer",
  description:
    "Semi truck & tractor-trailer towing in Columbia, SC. Fifth-wheel safe, I-20 corridor. 24/7 dispatch.",
};

export default function Page() {
  return <TowingServicePage slug="semi-truck-towing" />;
}
