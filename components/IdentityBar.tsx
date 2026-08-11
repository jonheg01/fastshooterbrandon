import { site, socials } from "@/lib/site";

export function IdentityBar() {
  return (
    <nav className="idbar" aria-label="Contact and social">
      <div className="wrap idbar__inner">
        {socials.map((s) => (
          <a
            key={s.label}
            className="idlink"
            href={s.url}
            target="_blank"
            rel="noopener noreferrer me"
          >
            {s.label} {s.handle}
          </a>
        ))}
        <a className="idlink idlink--phone" href={site.phoneHref}>
          {site.phone}
        </a>
      </div>
    </nav>
  );
}
