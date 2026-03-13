import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Tire Change Service Columbia, SC | KM Truck & Trailer",
  description:
    "Commercial tire change roadside in Columbia, SC—steer, drive, trailer. I-26, I-77, warehouses.",
};

export default function Page() {
  return <TowingServicePage slug="tire-change-service" />;
}
