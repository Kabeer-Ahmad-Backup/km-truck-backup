# SEO copy — April 2026 (sorted by path)

Copy lives **inline** in each route’s `page.tsx` (and `app/towing/towing-data.ts` for towing H1/hero). Metadata uses `withPageMeta` from `lib/site-metadata.ts`. Long-form on-page sections for the April 2026 pass live in `lib/service-articles/april-2026-seo-pages.ts` and are passed as `articleSections` (and per-slug via `towingArticlesBySlug` in `towing-data.ts`). HTTP `X-Robots-Tag` is not set in app code; use edge middleware or hosting headers if you need that header explicitly.

| Path | Meta title | Meta description (summary) |
|------|------------|----------------------------|
| `/abous-us` | Truck & Trailer Repair in South Carolina · 24/7 · KM Truck & Trailer | 24/7 repair, emergency roadside, towing in SC |
| `/emergency-roadside-repair` | Fast Emergency Truck Roadside Repair · Columbia, SC · … | Mobile breakdown and towing when repair can’t be finished roadside |
| `/fuel-delivery` (site) | Emergency Diesel Fuel Delivery · South Carolina · … | 24/7 diesel delivery state-wide |
| `/liftgate-repair` | Liftgate Repair & Maintenance in SC · … | Professional liftgate repair and maintenance, SC |
| `/lockouts` | Truck & Trailer Lockout Service · South Carolina · … | 24/7 cab & trailer lockout, SC |
| `/trailer-door` | Trailer Door Repair & Replacement in SC · … | Door repair and replacement, SC |
| `/trailer-electrical-a-c-overhaul-services` | Trailer Electrical & AC Overhaul Services in SC · … | Electrical and AC overhauls, SC |
| `/trailer-repair` | Expert Trailer Repair in South Carolina · … | Mobile and shop trailer repair, SC |
| `/trailer-tires` | Trailer Tire Repair & Replacement in South Carolina · … | Tire repair and replacement, SC |
| `/towing` | Towing & Roadside Recovery in Columbia, SC · … | Towing and recovery, Columbia / corridors |
| `/towing/emergency-towing` | Emergency Towing Columbia, SC · … | 24/7 emergency towing, Columbia |
| `/towing/flatbed-towing` | Flatbed Towing Columbia, SC · … | Flatbed for sensitive / low vehicles |
| `/towing/fuel-delivery` | 24/7 Fuel Delivery Service · Columbia, SC · … | Roadside fuel delivery, Columbia / I-77 |
| `/towing/heavy-duty-towing` | Heavy Duty Towing Columbia, SC · … | Heavy and rotator towing, Midlands |
| `/towing/jump-start-service` | 24/7 Jump Start Service · Columbia, SC · … | Commercial jump start, 24/7 |
| `/towing/light-duty-towing` | Light Duty Towing in Columbia, SC · … | Light commercial towing |
| `/towing/roadside-assistance` | Roadside Assistance Columbia, SC · … | Commercial roadside help |
| `/towing/semi-truck-towing` | Semi Truck Towing in Columbia, SC · … | Tractor / trailer recovery |
| `/towing/tire-change-service` | 24/7 Tire Change Service · Columbia, SC · … | Roadside commercial tire service |
| `/towing/vehicle-lockout-service` | Vehicle Lockout Service · Columbia, SC · … | 24/7 lockout, commercial focus |

Towing H1/hero: `app/towing/towing-data.ts` (`title`, `heroSubtitle` per slug).

## About page (`/abous-us`)

- Metadata: `app/abous-us/layout.tsx` (not in the client `page.tsx`).
- Hero H1 + support line: `app/abous-us/page.tsx` (`ABOUT_HERO_TITLE`, `ABOUT_HERO_SUB`).
