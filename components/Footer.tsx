import Link from "next/link";
import { site, socials, categories } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <p className="fineprint">
            {site.person}, {site.credential}
            <br />
            {site.phone}
            <br />
            {site.domain}
          </p>
          <p className="fineprint" style={{ marginTop: 16 }}>
            Links to gear on this site point to the manufacturer or retailer who
            sells it. Specs and prices shown are the ones published on those
            sites and can change without notice. Check the seller for current
            detail before you buy. This site is owned and operated by{" "}
            {site.person} and is not affiliated with any match, sanctioning
            body, or governing organization.
          </p>
          <p className="fineprint" style={{ marginTop: 16 }}>
            &copy; {new Date().getFullYear()} {site.person}. All rights reserved.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {categories.map((c) => (
            <Link key={c.key} href={c.slug}>
              {c.name}
            </Link>
          ))}
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer me"
            >
              {s.label}
            </a>
          ))}
          <a href={site.phoneHref}>{site.phone}</a>
        </nav>
      </div>
    </footer>
  );
}
