import type { Metadata } from "next";
import { withPageMeta } from "@/lib/site-metadata";
import TowingServicePage from "../TowingServicePage";

export const metadata: Metadata = withPageMeta("/towing/jump-start-service", {
  title: { absolute: "24/7 Jump Start Service | Columbia, SC | KM Truck & Trailer" },
  description:
    "Dead battery? KM Truck & Trailer offers fast 24/7 jump start service in Columbia, SC for cars and trucks. Quick roadside help when you need it.",
});

export default function Page() {
  return <TowingServicePage slug="jump-start-service" />;
}
