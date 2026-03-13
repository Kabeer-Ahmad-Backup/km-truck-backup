import type { Metadata } from "next";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = {
  title: "Jump Start Service Columbia, SC | KM Truck & Trailer",
  description:
    "Heavy-duty jump start for semis and commercial trucks in Columbia, SC. Safe commercial equipment.",
};

export default function Page() {
  return <TowingServicePage slug="jump-start-service" />;
}
