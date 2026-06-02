import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, Snowflake, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, NAV_LINKS, callHref, whatsappHref } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top bar */}
      <div className="hidden bg-navy text-navy-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs">
          <span>Authorized Wholesale Dealer & Service Provider · Patna, Bihar</span>
          <div className="flex items-center gap-4">
            <a href={callHref()} className="inline-flex items-center gap-1.5 hover:underline" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-3.5" /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Snowflake className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-navy">Patna Aircon</span>
            <span className="block text-[11px] font-medium text-muted-foreground">
              AC · Chillers · VRF · Cooling Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="whatsapp" size="sm">
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" /> WhatsApp Enquiry
            </a>
          </Button>
          <button
            className="inline-flex size-9 items-center justify-center rounded-md border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("border-t border-border lg:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
              activeProps={{ className: "rounded-md px-3 py-2.5 text-sm font-semibold text-primary bg-secondary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
