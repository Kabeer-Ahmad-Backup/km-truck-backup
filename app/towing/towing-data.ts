/** Shared copy for towing subpages (Columbia, SC). */

import { towingArticlesBySlug } from "@/lib/service-articles/april-2026-seo-pages";

export interface TowingFaqItem {
  question: string;
  answer: string;
}

export const towingPages = {
  "emergency-towing": {
    title: "Emergency Towing in Columbia, SC",
    heroSubtitle:
      "KM Truck & Trailer offers 24/7 emergency towing services in Columbia, SC. Whether it's a breakdown or an accident, our experienced team is ready to assist you quickly and efficiently.",
    bodyIntro:
      "When you break down on I-26, I-77, or anywhere in the Columbia, SC metro area, you need a tow that shows up fast—not hours later.",
    bodyContent:
      "K&M Truck & Trailer Repair dispatches emergency towing 24/7 for commercial vehicles, semis, and heavy equipment. We coordinate the right truck for your weight class, secure your load safely, and can deliver to your shop, yard, or our preferred repair partners in Columbia and Richland County. One call to (803) 393-4907 puts you in line for priority response when every minute of downtime costs money.",
    features: [
      "24/7 Columbia dispatch",
      "I-26 / I-77 / I-20",
      "Commercial & semi",
      "Safe load securement",
      "Shop or yard delivery",
      "Priority fleet response",
    ],
    faqItems: [
      { question: "What counts as emergency towing in Columbia?", answer: "Any breakdown where you’re unsafe on the shoulder, blocking traffic, or losing revenue by the minute—especially on I-26, I-77, or inside the Columbia metro. We treat commercial calls as priority." },
      { question: "Will you tow me to my own shop in Richland County?", answer: "Yes. Tell dispatch your preferred yard, dealer, or shop in Columbia or Richland County—we’ll coordinate drop-off and securement for the route." },
      { question: "How fast can a wrecker get to I-77 near Columbia?", answer: "ETA depends on traffic and which unit is closest. Call (803) 393-4907—dispatch quotes an estimated arrival and sends the right truck for your weight class." },
      { question: "Do you tow at night and on weekends?", answer: "Yes. Emergency towing is 24/7, including nights, weekends, and holidays for Columbia, SC and the Midlands." },
    ] satisfies TowingFaqItem[],
    articleSections: towingArticlesBySlug["emergency-towing"],
  },
  "heavy-duty-towing": {
    title: "Heavy Duty Towing in Columbia, SC",
    heroSubtitle:
      "Rotator and heavy-wrecker towing for loaded semis, Class 7–8 trucks, and equipment in the Columbia, SC Midlands.",
    bodyIntro:
      "Heavy-duty towing in Columbia, SC requires the right equipment and operators who understand air brakes, fifth wheels, and DOT rules.",
    bodyContent:
      "We tow loaded trailers, construction equipment, and Class 7–8 trucks that standard wreckers can’t handle. Whether you’re stuck near the Port of Charleston route, on US-1, or in an industrial park around Columbia, we’ll match rotator or heavy wrecker capacity to your gross weight so your unit is moved without secondary damage. Trust K&M for professional heavy-duty recovery across the Midlands.",
    features: [
      "Class 7–8 & loaded trailers",
      "Rotator / heavy wrecker",
      "DOT-safe recovery",
      "Construction equipment",
      "Midlands coverage",
      "Minimal secondary damage",
    ],
    faqItems: [
      { question: "Why can’t a standard wrecker tow my loaded semi?", answer: "Gross weight and trailer configuration need a heavy wrecker or rotator rated for your load. Wrong equipment risks cable failure, frame stress, or DOT issues—we match capacity to your Columbia, SC job." },
      { question: "Do you tow construction equipment near Columbia?", answer: "Yes. We recover loaders, rollers, and other job-site equipment when the move is within our heavy-duty capability—describe weight and access when you call." },
      { question: "Is heavy-duty towing more expensive?", answer: "Rates reflect equipment type, distance, and weight class. We’re upfront about pricing before we roll so fleets near Columbia can budget clearly." },
      { question: "Can you tow without unloading my trailer?", answer: "Often yes, when weight and securement allow. Dispatch needs your loaded weight and cargo type to send the correct unit." },
    ] satisfies TowingFaqItem[],
    articleSections: towingArticlesBySlug["heavy-duty-towing"],
  },
  "light-duty-towing": {
    title: "Light Duty Towing in Columbia, SC",
    heroSubtitle:
      "KM Truck & Trailer provides reliable light-duty towing services in Columbia, SC. From cars to small trucks, our experienced team ensures a safe and efficient towing experience whenever you need it.",
    bodyIntro:
      "Pickup trucks, vans, box trucks, and light commercial vehicles still need reliable towing in Columbia, SC—especially when they’re part of your fleet.",
    bodyContent:
      "Our light-duty towing is priced fairly and scheduled quickly, ideal for local moves to a repair facility, impound coordination, or moving a disabled vehicle off a busy corridor like Garners Ferry Road or Two Notch. We treat light-duty jobs with the same professionalism as heavy recoveries, so your Columbia-area operations stay on schedule.",
    features: [
      "Fleet light commercial",
      "Local repair tows",
      "Impound coordination",
      "Fair pricing",
      "Garners Ferry / Two Notch",
      "Same-day when possible",
    ],
    faqItems: [
      { question: "What vehicles qualify as light-duty for your Columbia service?", answer: "Typically pickups, vans, small box trucks, and light commercial units under heavy Class 6—ideal for fleet moves to a Columbia repair shop or clearing a busy street." },
      { question: "Is light-duty towing cheaper than heavy?", answer: "Yes. Light-duty rates are lower because equipment and crew requirements are smaller—ask for a quote for your Columbia pickup or van." },
      { question: "Can you tow from Garners Ferry or Two Notch?", answer: "Yes. We regularly run light-duty tows on major Columbia corridors and neighborhoods—same dispatch line (803) 393-4907." },
      { question: "Do you coordinate with impound or police?", answer: "We can work with law enforcement or lot requirements when you need a tow from an impound or accident scene—call with case details." },
    ] satisfies TowingFaqItem[],
    articleSections: towingArticlesBySlug["light-duty-towing"],
  },
  "semi-truck-towing": {
    title: "Semi Truck Towing in Columbia, SC",
    heroSubtitle:
      "KM Truck & Trailer offers professional semi truck towing services in Columbia, SC. Our expert team is available 24/7 to handle heavy-duty towing with speed and safety.",
    bodyIntro:
      "Semi truck towing around Columbia, SC is what we do every week: tractors, dry vans, reefers, and flatbeds that won’t start, have brake failures, or need a winch-out.",
    bodyContent:
      "We understand clearance heights, kingpin locks, and how to protect your trailer while towing. If you’re along I-20 toward Florence or Augusta, or parked at a Columbia distribution center, call us for semi-specific towing that gets you to a safe yard or back in service as soon as possible.",
    features: [
      "Tractor + trailer",
      "Dry van / reefer / flatbed",
      "Winch-out",
      "Kingpin & clearance aware",
      "Distribution centers",
      "I-20 corridor",
    ],
    faqItems: [
      { question: "Do you tow tractor and trailer together?", answer: "When safe and legal for the failure type, yes. Sometimes only the power unit is towed—dispatch advises based on brakes, kingpin, and Columbia SC access." },
      { question: "What if I’m at a Columbia distribution center?", answer: "We routinely service DC yards and lots—send the gate code or contact name if needed so our driver can enter quickly." },
      { question: "Can you winch a stuck semi?", answer: "Yes, when soil and angles allow. Describe mud, grade, and whether trailer is loaded so we send winch-capable equipment." },
      { question: "Will my trailer be protected during semi tow?", answer: "We use procedures that protect fifth wheel, landing gear, and trailer height clearances—our operators are trained for Columbia-area semis." },
    ] satisfies TowingFaqItem[],
    articleSections: towingArticlesBySlug["semi-truck-towing"],
  },
  "flatbed-towing": {
    title: "Flatbed Towing in Columbia, SC",
    heroSubtitle:
      "Level-deck transport for low clearance, AWD, and equipment that can’t be dollied—protected moves across Columbia, SC and the region.",
    bodyIntro:
      "When a standard hook isn’t appropriate—low clearance, all-wheel drive, or a vehicle that must stay level—flatbed towing is the answer.",
    bodyContent:
      "In Columbia, SC, we deploy flatbeds for sensitive loads, specialty trucks, and equipment that can’t be dollied. Your cargo stays secured on the deck from pickup to drop-off, whether that’s a few miles across town or a longer haul to a regional shop. Ask for flatbed when you need maximum protection for your Columbia-area move.",
    features: [
      "Level load transport",
      "Low clearance OK",
      "Specialty trucks",
      "Deck securement",
      "Regional hauls",
      "Maximum cargo protection",
    ],
    faqItems: [
      { question: "When should I request flatbed instead of hook tow?", answer: "Low ground clearance, AWD concerns, specialty bodywork, or cargo that must stay level—flatbed keeps the Columbia load on one plane from pickup to drop-off." },
      { question: "How is my truck secured on the deck?", answer: "Chains, straps, and blocks per weight and DOT practice—your unit is tied down before we move on Columbia roads." },
      { question: "How far can you flatbed from Columbia?", answer: "Regional hauls to shops or yards are common—distance affects rate; ask dispatch for mileage pricing." },
      { question: "Is flatbed slower to schedule?", answer: "Flatbed availability can vary by time of day. Call early for fastest dispatch—we’ll tell you honest ETAs." },
    ] satisfies TowingFaqItem[],
    articleSections: towingArticlesBySlug["flatbed-towing"],
  },
  "roadside-assistance": {
    title: "Roadside Assistance in Columbia, SC",
    heroSubtitle:
      "On-site repairs and triage—air leaks, hoses, belts, diagnostics—so you may avoid a full tow in Columbia, SC.",
    bodyIntro:
      "Beyond towing, our roadside assistance in Columbia, SC covers the fixes that keep you rolling without a full tow.",
    bodyContent:
      "Minor air leaks, hose replacements, belt issues, and diagnostic support on site. We’re mobile-first—our units carry tools and parts common to fleet breakdowns. If we can repair you roadside, we will; if not, we’ll tow you to the right facility. Columbia drivers and fleet managers rely on us for honest triage and fast arrival times.",
    features: [
      "Air & hose repairs",
      "Belt replacement",
      "Fault diagnostics",
      "Mobile parts common stock",
      "Tow only if needed",
      "Fleet-friendly triage",
    ],
    faqItems: [
      { question: "What can you fix without towing in Columbia?", answer: "Minor air leaks, some hoses and belts, basic diagnostics, and triage to see if you can drive to a shop—we carry common fleet consumables on mobile units." },
      { question: "If you can’t fix it roadside, what happens?", answer: "We explain honestly and can tow you to a trusted Columbia-area facility so you’re not stranded guessing." },
      { question: "Do fleets get priority roadside?", answer: "We work hard for all commercial callers—fleets with account setups get streamlined dispatch; ask about Columbia fleet options." },
      { question: "Is roadside assistance the same as emergency repair?", answer: "Roadside is broader: quick fixes plus tow if needed. Emergency repair pages focus on mechanical repair—both start with (803) 393-4907." },
    ] satisfies TowingFaqItem[],
    articleSections: towingArticlesBySlug["roadside-assistance"],
  },
  "fuel-delivery": {
    title: "24/7 Fuel Delivery in Columbia, SC",
    heroSubtitle:
      "Fast 24/7 fuel delivery in Columbia, SC by KM Truck & Trailer. Quick response, diesel and gas delivery for trucks and cars when available. Call (803) 393-4907 for help.",
    bodyIntro:
      "Out of diesel on the shoulder near Columbia, SC? We deliver fuel to your location—diesel for semis and commercial trucks.",
    bodyContent:
      "You’re not walking to the nearest exit or risking a contaminated jug fill. We bring enough to reach the next safe fuel stop or your yard, with proper handling and spill awareness. Fuel delivery pairs with our broader roadside program; one call covers Columbia, Lexington, and the I-77 corridor when you’re empty.",
    features: [
      "Diesel for semis",
      "Shoulder & lot delivery",
      "Proper handling",
      "Lexington & I-77",
      "Enough to next stop",
      "24/7 with dispatch",
    ],
    faqItems: [
      { question: "What fuel do you deliver to stranded trucks?", answer: "On-road diesel for semis and commercial trucks—enough to reach the next safe pump or your Columbia, SC yard." },
      { question: "I’m empty on I-77—how long until fuel arrives?", answer: "Typical window is similar to other roadside calls; dispatch gives an ETA based on Lexington/Columbia traffic and unit location." },
      { question: "Do I need to prime after you add diesel?", answer: "If you ran completely dry, priming may be needed—we can assist so you’re not stuck cranking." },
      { question: "Is spill risk handled safely?", answer: "We use proper containers and spill awareness—tell us if you’re on a slope or tight shoulder near Columbia." },
    ] satisfies TowingFaqItem[],
    articleSections: towingArticlesBySlug["fuel-delivery"],
  },
  "tire-change-service": {
    title: "24/7 Tire Change Service in Columbia, SC",
    heroSubtitle:
      "Need a fast tire change in Columbia, SC? KM Truck & Trailer offers 24/7 roadside tire service for trucks and cars. Quick, reliable help when you need it.",
    bodyIntro:
      "Commercial tire change service in Columbia, SC means the right size, proper torque, and DOT-ready wheels.",
    bodyContent:
      "We handle steer, drive, and trailer positions on site—flats, blowouts, and dual replacements. Our techs work fast on I-26 and I-77 pull-offs and at Columbia warehouses so you’re not losing a full day to a single tire. Combine tire service with towing if the rim or hub needs shop attention.",
    features: [
      "Steer / drive / trailer",
      "Blowouts & duals",
      "I-26 / I-77 pull-offs",
      "Warehouse calls",
      "Torque to spec",
      "Tow if rim damage",
    ],
    faqItems: [
      { question: "Do you change steer tires on the shoulder near Columbia?", answer: "Yes—steer, drive, and trailer positions when we have your size in stock or on the truck. I-26/I-77 pull-offs are common call sites." },
      { question: "How long does a commercial tire change take?", answer: "Often 30–60 minutes depending on duals, rusted studs, and access—warehouses usually faster than narrow shoulders." },
      { question: "What if the rim is bent?", answer: "We’ll inspect—severe rim damage may require tow to a Columbia shop for wheel replacement before safe roll." },
      { question: "Do you torque lug nuts to spec?", answer: "Yes. DOT-minded torque and pattern matter—we treat commercial wheels seriously." },
    ] satisfies TowingFaqItem[],
    articleSections: towingArticlesBySlug["tire-change-service"],
  },
  "jump-start-service": {
    title: "24/7 Jump Start Service in Columbia, SC",
    heroSubtitle:
      "Dead battery? KM Truck & Trailer offers fast 24/7 jump start service in Columbia, SC for cars and trucks. Quick roadside help when you need it.",
    bodyIntro:
      "Dead batteries on a big rig need more than a passenger jump pack. In Columbia, SC, we bring heavy-duty jump equipment sized for commercial starting loads.",
    bodyContent:
      "Safe for your electrical system and alternator. We’ll test charging after start and advise if you need a battery or alternator replacement. Fast jump-start service keeps you from missing delivery windows when you’re parked in Columbia or the surrounding Midlands.",
    features: [
      "Heavy-duty packs",
      "Commercial cranking amps",
      "Charging test after start",
      "Battery advice",
      "Midlands coverage",
      "Delivery window friendly",
    ],
    faqItems: [
      { question: "Why won’t a car jump box start my semi?", answer: "Commercial engines need far more cranking amps and stable voltage—our Columbia jump service uses equipment sized for big blocks and high compression." },
      { question: "Will a jump hurt my alternator?", answer: "We connect correctly and test charging after start. If the alternator’s failing, we’ll tell you before you lose another load." },
      { question: "Do you replace batteries roadside?", answer: "We can advise and often source replacement—ask dispatch if you want battery service after the jump in the Midlands." },
      { question: "How fast for jump start in Columbia?", answer: "Same dispatch queue as other roadside—call (803) 393-4907 for ETA to your parking lot or shoulder." },
    ] satisfies TowingFaqItem[],
    articleSections: towingArticlesBySlug["jump-start-service"],
  },
  "vehicle-lockout-service": {
    title: "Vehicle Lockout Service in Columbia, SC",
    heroSubtitle:
      "Fast and reliable vehicle lockout service in Columbia, SC. KM Truck & Trailer provides 24/7 emergency help to unlock your vehicle quickly and safely.",
    bodyIntro:
      "Locked out of your cab or trailer in Columbia, SC? Our lockout service uses professional tools and techniques to regain entry without damage.",
    bodyContent:
      "We service commercial vehicles and trailers—cab access, toolboxes, and cargo areas where keys are misplaced. Discreet, quick, and available when you’re stranded at a Columbia shipper, rest area, or job site.",
    features: [
      "Cab & trailer",
      "Toolboxes & cargo",
      "No damage entry",
      "Shippers & rest areas",
      "Discreet service",
      "Fast response",
    ],
    faqItems: [
      { question: "Can you open my cab without scratching paint?", answer: "We use commercial lockout tools and techniques aimed at zero damage—doors, seals, and locks stay intact when possible." },
      { question: "Do you unlock trailer doors and toolboxes?", answer: "Yes—cab, trailer cargo doors, and toolboxes when keys are lost or locked inside." },
      { question: "How fast is lockout service in Columbia?", answer: "We target the same 45–60 minute window as other SC roadside when traffic allows—nights included." },
      { question: "What if my key fob died inside the sleeper?", answer: "We still gain entry professionally—then you can retrieve the fob or arrange a spare. Call from any Columbia shipper or rest area." },
    ] satisfies TowingFaqItem[],
    articleSections: towingArticlesBySlug["vehicle-lockout-service"],
  },
} as const;

export type TowingSlug = keyof typeof towingPages;
