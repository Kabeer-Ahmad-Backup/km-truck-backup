import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Roadside Assistance Columbia, SC | KM Truck & Trailer",
  description:
    "Commercial roadside assistance in Columbia, SC—air leaks, hoses, diagnostics. Mobile repair when possible.",
};

export default function Page() {
  return <TowingServicePage slug="roadside-assistance" />;
}
