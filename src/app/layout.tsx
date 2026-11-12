import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { assetPath } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaykanojiya710-dev.github.io/salon-website-demo/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "[Salon name] | Hair & Nail Studio in Austin, TX",
  description:
    "Hair color, cuts and gel nails on South Congress in Austin. Free consultations, online booking, and a chair you keep. Book your appointment.",
  keywords: [
    "hair salon Austin",
    "balayage Austin",
    "gel manicure South Congress",
    "nail studio Austin",
    "bridal hair Austin",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "[Salon name] | Hair & Nail Studio in Austin, TX",
    description:
      "Hair color, cuts and gel nails on South Congress in Austin. Free consultations, online booking, and a chair you keep.",
    url: "/",
    siteName: "[Salon name]",
    images: [
      {
        url: assetPath("/images/hero-salon.png"),
        width: 1344,
        height: 768,
        alt: "Sunlit styling chairs and arched brass mirrors inside [Salon name]",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "[Salon name] | Hair & Nail Studio in Austin, TX",
    description:
      "Hair color, cuts and gel nails on South Congress in Austin. Free consultations, online booking, and a chair you keep.",
    images: [assetPath("/images/hero-salon.png")],
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
