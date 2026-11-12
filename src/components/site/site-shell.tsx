"use client";

import { useEffect, useState } from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";
import HomePage from "./pages/home";
import ServicesPage from "./pages/services";
import GalleryPage from "./pages/gallery";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import BookPage from "./pages/book";
import PrivacyPage from "./pages/privacy";
import TermsPage from "./pages/terms";
import NotFoundPage from "./pages/not-found";

/* The sandbox preview exposes a single route, so the multi page site is served
   from "/" with hash deep links (#/services, #/book, ...). Navigation, the
   back button and deep links all behave like separate pages. */
function normalize(hash: string): string {
  const h = hash.replace(/^#/, "");
  if (!h || h === "/") return "/";
  return h.startsWith("/") ? h : `/${h}`;
}

function renderPage(route: string) {
  switch (route) {
    case "/":
      return <HomePage />;
    case "/services":
      return <ServicesPage />;
    case "/gallery":
      return <GalleryPage />;
    case "/about":
      return <AboutPage />;
    case "/contact":
      return <ContactPage />;
    case "/book":
      return <BookPage />;
    case "/privacy":
      return <PrivacyPage />;
    case "/terms":
      return <TermsPage />;
    default:
      return <NotFoundPage />;
  }
}

export function SiteShell() {
  const [route, setRoute] = useState("/");

  useEffect(() => {
    const sync = () => setRoute(normalize(window.location.hash));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById("main");
          main?.scrollIntoView();
          main?.focus();
        }}
        className="btn btn-primary sr-only left-4 top-4 z-[60] focus:not-sr-only focus:fixed"
      >
        Skip to content
      </a>
      <Nav route={route} />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none" key={route}>
        {renderPage(route)}
      </main>
      <Footer />
    </div>
  );
}
