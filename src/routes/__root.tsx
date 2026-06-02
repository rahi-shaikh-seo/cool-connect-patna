import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Patna Aircon | Authorized AC Dealer & Cooling Solutions in Patna" },
      {
        name: "description",
        content:
          "Patna Aircon is a trusted authorized wholesale dealer and service provider of AC, chillers, VRF systems, cassette AC, duct AC, cold room units, and AC installation services in Patna, Bihar.",
      },
      { name: "author", content: "Patna Aircon" },
      {
        name: "keywords",
        content:
          "AC dealer in Patna, authorized AC dealer in Patna, cassette AC dealer in Patna, duct AC dealer in Patna, VRF AC system in Patna, air cooled chiller dealer in Patna, Carrier AC dealer in Patna, Toshiba AC dealer in Patna, AC installation service in Patna, cold room unit dealer in Patna, HVAC solution provider in Patna",
      },
      { property: "og:title", content: "Patna Aircon | Authorized AC Dealer & Cooling Solutions in Patna" },
      {
        property: "og:description",
        content:
          "Trusted authorized AC dealer in Patna — chillers, VRF systems, cassette AC, duct AC, cold room units and AC installation services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Patna Aircon" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          name: "Patna Aircon",
          description:
            "Authorized wholesale dealer and service provider of air conditioning and cooling products in Patna, Bihar.",
          foundingDate: "2020",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Near Tamtam Parao, Phulwari Sharif",
            addressLocality: "Patna",
            addressRegion: "Bihar",
            addressCountry: "IN",
          },
          areaServed: "Patna, Bihar",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            bestRating: "5",
            ratingCount: "1",
          },
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      <FloatingCTA />
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  );
}
