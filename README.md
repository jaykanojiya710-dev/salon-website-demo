# Salon Website Demo

A static Next.js demo of a hair and nail studio website. The salon name, contact information, staff, reviews, and business details are sample content.

**Booking is disabled in this public demo.** The form validates in your browser only. It does not send or save the information you enter. The original server endpoint is kept under `server/api/` as reference code and is not included in the GitHub Pages build.

The local database is not included. Replace the sample business details and connect a booking backend before using this as a real business website.

## Run locally

```sh
bun install
bun dev
```

## GitHub Pages

The `Deploy to GitHub Pages` workflow builds the static site and deploys it from the `main` branch. The project base path is configured for the `salon-website-demo` repository.
