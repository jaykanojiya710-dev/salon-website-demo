import { SiteShell } from "@/components/site/site-shell";
import { assetPath, brand, faqs } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HairSalon",
      name: brand.legalName,
      description:
        "Hair color, cuts and gel nails on South Congress in Austin. Free consultations, online booking, and a chair you keep.",
      telephone: "+15125550138",
      email: brand.email,
      image: assetPath("/images/hero-salon.png"),
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: brand.address[0],
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: "78704",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteShell />
    </>
  );
}
