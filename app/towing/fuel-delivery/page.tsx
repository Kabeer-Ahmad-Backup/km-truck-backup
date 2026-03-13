import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Fuel Delivery Columbia, SC | KM Truck & Trailer",
  description:
    "Diesel fuel delivery to your truck in Columbia, SC, Lexington, and I-77 corridor. 24/7.",
};

export default function Page() {
  return <TowingServicePage slug="fuel-delivery" />;
}
