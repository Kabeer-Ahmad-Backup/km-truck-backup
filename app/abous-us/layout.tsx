import type { Metadata } from "next";
import { withPageMeta } from "@/lib/site-metadata";

export const metadata: Metadata = withPageMeta("/abous-us", {
  title: { absolute: "Truck & Trailer Repair in South Carolina | 24/7 | KM Truck & Trailer" },
  description:
    "Get fast 24/7 truck & trailer repair in South Carolina. KM Truck & Trailer provides emergency roadside service for breakdowns, towing and repairs.",
});

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
