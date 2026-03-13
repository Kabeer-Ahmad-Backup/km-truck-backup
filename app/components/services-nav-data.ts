/** Nav + services page–aligned menu (label + href only). */
export type ServiceNavLink = { label: string; href: string };
export type ServiceNavGroup = { id: string; title: string; href: string; items: ServiceNavLink[] };

export const serviceMenuGroups: ServiceNavGroup[] = [
  {
    id: "truck",
    title: "Truck Services",
    href: "/services",
    items: [
      { label: "Engine Diagnostics & Repair", href: "/vehicle-engine-diagnostic" },
      { label: "Transmission Repair & Overhauls", href: "/transmission" },
      { label: "Brake Service & Repair", href: "/brakes" },
      { label: "Tire Repair & Change", href: "/tires" },
      { label: "Electrical System Repairs", href: "/electrical" },
      { label: "Battery Replacement", href: "/battery" },
      { label: "Steering & Suspension", href: "/steering-and-suspension" },
      { label: "Oil Change & Preventive Maintenance", href: "/air-and-cabin-filter" },
      { label: "AC & Heating Repair", href: "/air-conditioning" },
      { label: "DPF Cleaning & Force Regen", href: "/dpf" },
    ],
  },
  {
    id: "trailer",
    title: "Trailer Services",
    href: "/services",
    items: [
      { label: "Trailer Structural Repair", href: "/trailer-repair" },
      { label: "Trailer Tires", href: "/trailer-tires" },
      { label: "Trailer Door Repair", href: "/trailer-door" },
      { label: "Liftgate Repair", href: "/liftgate-repair" },
      { label: "Trailer Electrical & AC", href: "/trailer-electrical-a-c-overhaul-services" },
    ],
  },
  {
    id: "towing",
    title: "Towing",
    href: "/towing",
    items: [
      { label: "Emergency Towing", href: "/towing/emergency-towing" },
      { label: "Heavy Duty Towing", href: "/towing/heavy-duty-towing" },
      { label: "Light Duty Towing", href: "/towing/light-duty-towing" },
      { label: "Semi Truck Towing", href: "/towing/semi-truck-towing" },
      { label: "Flatbed Towing", href: "/towing/flatbed-towing" },
      { label: "Roadside Assistance", href: "/towing/roadside-assistance" },
      { label: "Fuel Delivery", href: "/towing/fuel-delivery" },
      { label: "Tire Change Service", href: "/towing/tire-change-service" },
      { label: "Jump Start Service", href: "/towing/jump-start-service" },
      { label: "Vehicle Lockout Service", href: "/towing/vehicle-lockout-service" },
    ],
  },
  {
    id: "roadside",
    title: "Emergency Roadside",
    href: "/services",
    items: [
      { label: "Emergency Roadside Repair", href: "/emergency-roadside-repair" },
      { label: "Fuel Delivery", href: "/fuel-delivery" },
      { label: "Lockout Service", href: "/lockouts" },
    ],
  },
];
