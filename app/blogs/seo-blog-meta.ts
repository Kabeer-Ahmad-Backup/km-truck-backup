import type { BlogPost } from "./blog-types";

const APRIL_DIR = "/Blogs-april-2026";

/** Public folder filenames include spaces and `&`; encode for URL paths. */
function aprilImage(filename: string): string {
  return `${APRIL_DIR}/${encodeURIComponent(filename)}`;
}

/** Listing + metadata for SEO posts; body text lives in `content/blog-bodies/{slug}.txt`. */
export type SeoBlogMeta = Omit<BlogPost, "content">;

export const seoBlogMetaList: SeoBlogMeta[] = [
  {
    slug: "truck-trailer-repair-south-carolina",
    title: "Truck & Trailer Repair in South Carolina | K&M Truck & Trailer",
    excerpt:
      "Reliable truck & trailer repair in South Carolina. Expert mechanics handle engines, brakes, and trailers with fast service to keep your fleet moving safely.",
    date: "2026-04-10",
    author: "K&M Truck & Trailer",
    image: aprilImage("Truck & Trailer Repair South Carolina.png"),
    imageAlt: "Truck and trailer repair in South Carolina",
    contentImage: aprilImage("Truck & Trailer Repair South Carolina_1.png"),
    contentImageAlt: "Commercial truck and trailer service in South Carolina",
    readTime: "14 min read",
    introLength: 2,
  },
  {
    slug: "24-7-truck-roadside-assistance-south-carolina",
    title: "24/7 Truck Roadside Assistance SC",
    excerpt:
      "24/7 truck roadside assistance in South Carolina. Fast response for breakdowns, tire issues, fuel delivery, and emergency repairs to get you back on road.",
    date: "2026-04-11",
    author: "K&M Truck & Trailer",
    image: aprilImage("Truck Roadside Assistance South Carolina.png"),
    imageAlt: "Truck roadside assistance in South Carolina",
    contentImage: aprilImage("Truck Roadside Assistance South Carolina_1.png"),
    contentImageAlt: "Roadside assistance for commercial trucks in South Carolina",
    readTime: "12 min read",
    introLength: 2,
  },
  {
    slug: "semi-truck-repair-columbia-sc",
    title: "Semi Truck Repair Columbia SC | Fast & Reliable Service",
    excerpt:
      "Professional semi truck repair in Columbia SC. Skilled technicians provide engine, brake, and transmission services with quick turnaround and reliable support.",
    date: "2026-04-12",
    author: "K&M Truck & Trailer",
    image: aprilImage("Semi Truck Repair Columbia SC.png"),
    imageAlt: "Semi truck repair in Columbia SC",
    contentImage: aprilImage("Semi Truck Repair Columbia SC_1.png"),
    contentImageAlt: "Semi truck repair service Columbia South Carolina",
    readTime: "11 min read",
    introLength: 2,
  },
  {
    slug: "truck-engine-diagnostics-repair-sc",
    title: "Truck Engine Diagnostics & Repair SC | Near Me",
    excerpt:
      "Advanced truck engine diagnostics & repair in SC. Accurate fault detection, performance tuning, and expert fixes to keep your diesel engine running smoothly.",
    date: "2026-04-13",
    author: "K&M Truck & Trailer",
    image: aprilImage("Truck Engine Diagnostics & Repair SC.png"),
    imageAlt: "Truck engine diagnostics and repair in South Carolina",
    contentImage: aprilImage("Truck Engine Diagnostics & Repair SC_1.png"),
    contentImageAlt: "Diesel engine diagnostics and repair",
    readTime: "13 min read",
    introLength: 2,
  },
  {
    slug: "truck-transmission-repair-south-carolina",
    title: "Truck Transmission Repair | South Carolina",
    excerpt:
      "Trusted truck transmission repair in South Carolina. We fix gear issues, slipping, and rebuild systems to ensure smooth shifting and long-lasting performance.",
    date: "2026-04-14",
    author: "K&M Truck & Trailer",
    image: aprilImage("Truck Transmission Repair South Carolina.png"),
    imageAlt: "Truck transmission repair in South Carolina",
    contentImage: aprilImage("Truck Transmission Repair South Carolina_1.png"),
    contentImageAlt: "Heavy-duty truck transmission service",
    readTime: "15 min read",
    introLength: 2,
  },
  {
    slug: "truck-brake-repair-columbia-sc",
    title: "Truck Brake Repair Columbia SC | Fast & Reliable Service",
    excerpt:
      "Expert truck brake repair in Columbia SC. We inspect, repair, and replace brake systems to ensure safety, reliability, and compliance on every trip.",
    date: "2026-04-15",
    author: "K&M Truck & Trailer",
    image: aprilImage("Truck Brake Repair Columbia SC.png"),
    imageAlt: "Truck brake repair in Columbia SC",
    contentImage: aprilImage("Truck Brake Repair Columbia SC_1.png"),
    contentImageAlt: "Commercial truck brake service Columbia SC",
    readTime: "14 min read",
    introLength: 2,
  },
  {
    slug: "truck-tire-repair-replacement-sc",
    title: "Truck Tire Repair & Replacement SC | Columbia",
    excerpt:
      "Truck tire repair & replacement in SC. Quick fixes, new tire installation, and roadside support to keep your vehicle safe, balanced, and road-ready.",
    date: "2026-04-16",
    author: "K&M Truck & Trailer",
    image: aprilImage("Truck Tire Repair & Replacement SC.png"),
    imageAlt: "Truck tire repair and replacement in South Carolina",
    contentImage: aprilImage("Truck Tire Repair & Replacement SC_1.png"),
    contentImageAlt: "Commercial truck tire repair and replacement",
    readTime: "13 min read",
    introLength: 2,
  },
  {
    slug: "diesel-truck-electrical-repair-south-carolina",
    title: "Diesel Truck Electrical Repair SC | K&M Truck & Trailer",
    excerpt:
      "Diesel truck electrical repair in South Carolina. We fix wiring, batteries, alternators, and faults to ensure reliable performance and system efficiency.",
    date: "2026-04-17",
    author: "K&M Truck & Trailer",
    image: aprilImage("Diesel Truck Electrical Repair South Carolina.png"),
    imageAlt: "Diesel truck electrical repair in South Carolina",
    contentImage: aprilImage("Diesel Truck Electrical Repair South Carolina_1.png"),
    contentImageAlt: "Diesel truck electrical and wiring repair",
    readTime: "12 min read",
    introLength: 2,
  },
  {
    slug: "dpf-cleaning-service-south-carolina",
    title: "DPF Cleaning Service Near Me | South Carolina",
    excerpt:
      "DPF cleaning service in South Carolina. Remove soot buildup, improve fuel efficiency, and restore engine performance with professional cleaning solutions.",
    date: "2026-04-18",
    author: "K&M Truck & Trailer",
    image: aprilImage("DPF Cleaning Service South Carolina.png"),
    imageAlt: "DPF cleaning service in South Carolina",
    contentImage: aprilImage("DPF Cleaning Service South Carolina_1.png"),
    contentImageAlt: "Diesel particulate filter cleaning service",
    readTime: "11 min read",
    introLength: 2,
  },
  {
    slug: "mobile-truck-repair-services-south-carolina",
    title: "Mobile Truck Repair Services SC | On-Site Repairs",
    excerpt:
      "Mobile truck repair services in South Carolina. On-site repairs for engines, tires, brakes, and more with fast response to reduce downtime and delays.",
    date: "2026-04-19",
    author: "K&M Truck & Trailer",
    image: aprilImage("Mobile Truck Repair Services South Carolina.png"),
    imageAlt: "Mobile truck repair services in South Carolina",
    contentImage: aprilImage("Mobile truck repair services south carolina_1.png"),
    contentImageAlt: "Mobile on-site truck repair South Carolina",
    readTime: "12 min read",
    introLength: 2,
  },
  {
    slug: "truck-repair-columbia-sc-24-7-km-truck-trailer",
    title: "Truck Repair in Columbia SC | 24/7 KM Truck & Trailer",
    excerpt:
      "Reliable truck repair in Columbia, SC. KM Truck & Trailer offers 24/7 emergency roadside service, diagnostics, and fast repairs to get you back on the road.",
    date: "2026-04-20",
    author: "K&M Truck & Trailer",
    image: "/hero-truck-white.png",
    imageAlt: "24/7 truck repair in Columbia SC",
    readTime: "8 min read",
    introLength: 2,
  },
  {
    slug: "truck-tire-repair-near-me-24-7-roadside",
    title: "Truck Tire Repair Near Me | 24/7 Roadside Service",
    excerpt:
      "Need truck tire repair near you? KM Truck & Trailer offers fast 24/7 roadside tire repair and replacement services to get you back on the road quickly.",
    date: "2026-04-21",
    author: "K&M Truck & Trailer",
    image: "/why_us_banner.jpg",
    imageAlt: "Truck tire repair near me 24/7 roadside service",
    readTime: "7 min read",
    introLength: 2,
  },
];
