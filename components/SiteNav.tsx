"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, categories } from "@/lib/site";
import { Reticle } from "@/components/Reticle";

export function SiteNav() {
  const path = usePathname();

  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap nav__inner">
        <Link className="nav__brand" href="/" aria-label={`${site.name}, home`}>
          <Reticle className="nav__mark" />
          <span className="nav__brandtext">
            <span className="nav__brand1">FAST SHOOTER</span>
            <span className="nav__brand2">BRANDON</span>
          </span>
        </Link>

        <ul className="nav__links">
          {categories.map((c) => {
            const active = path === c.slug;
            return (
              <li key={c.key}>
                <Link
                  className={`nav__link${active ? " is-active" : ""}`}
                  href={c.slug}
                  aria-current={active ? "page" : undefined}
                >
                  {c.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <a className="nav__phone" href={site.phoneHref}>
          {site.phone}
        </a>
      </div>
    </nav>
  );
}
