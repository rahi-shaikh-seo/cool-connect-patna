import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Snowflake, MessageCircle } from "lucide-react";
import { SITE, NAV_LINKS, CATEGORIES, callHref, whatsappHref } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Snowflake className="size-5" />
            </span>
            <span className="text-lg font-bold">Patna Aircon</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-navy-foreground/70">
            Authorized wholesale dealer and service provider of air conditioning and
            cooling products in Patna, Bihar. Established 2020.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-foreground/90">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-navy-foreground/70 hover:text-navy-foreground hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-foreground/90">
            Products & Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link to="/products" className="text-navy-foreground/70 hover:text-navy-foreground hover:underline">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-foreground/90">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-2.5">
              <MessageCircle className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={callHref()} className="hover:underline" target="_blank" rel="noopener noreferrer">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a>
            </li>
          </ul>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-whatsapp px-3 py-2 text-sm font-medium text-whatsapp-foreground hover:bg-whatsapp/90"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} Patna Aircon. AC dealer, chillers, VRF & cooling solutions in Patna, Bihar.
        </div>
      </div>
    </footer>
  );
}
