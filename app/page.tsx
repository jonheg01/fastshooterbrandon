import Link from "next/link";
import { Hero } from "@/components/Hero";
import { IdentityBar } from "@/components/IdentityBar";
import { Footer } from "@/components/Footer";
import { ReticleDivider } from "@/components/Reticle";
import { site, sponsors, coaching, categories } from "@/lib/site";
import { productsFor } from "@/lib/products";

// Rendered per request so the nonce based CSP in middleware.ts applies.
// The page data is a static import, so the render cost is negligible.
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IdentityBar />

      <main id="main">
        {/* ------------------------------------------------------- gear */}
        <section className="section" aria-labelledby="gear-h">
          <div className="wrap">
            <div className="section__head">
              <p className="eyebrow">The gear</p>
            </div>
            <h2 className="h2" id="gear-h">
              What I run
            </h2>
            <p className="lede">
              Three guns, three lists. Every part below is something I compete
              with. Specs and prices come straight off the manufacturer pages,
              and every card links back to the people who build it.
            </p>

            <div className="navgrid">
              {categories.map((c) => {
                const count = productsFor(c.key).length;
                return (
                  <Link className="navcard" href={c.slug} key={c.key}>
                    <h3 className="navcard__title">{c.name}</h3>
                    <p className="navcard__blurb">{c.blurb}</p>
                    <p className="navcard__meta">
                      {count} {count === 1 ? "item" : "items"}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------- sponsors */}
        <section className="section" aria-labelledby="sponsors-h">
          <div className="wrap">
            <div className="section__head">
              <p className="eyebrow">Behind the gun</p>
            </div>
            <h2 className="h2" id="sponsors-h">
              Sponsors
            </h2>
            <p className="lede">
              The companies whose equipment is on my gun when the timer goes off.
            </p>

            <div className="sponsors">
              {sponsors.map((s) => (
                <a
                  className="sponsor"
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                >
                  <h3 className="sponsor__name">{s.name}</h3>
                  <p className="sponsor__line">{s.line}</p>
                  <p className="sponsor__detail">{s.detail}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------- coaching */}
        <section className="section" aria-labelledby="coaching-h">
          <div className="wrap">
            <div className="section__head">
              <p className="eyebrow">Training</p>
            </div>
            <h2 className="h2" id="coaching-h">
              Coaching
            </h2>

            <div className="coach">
              <h3 className="sponsor__name">{coaching.name}</h3>
              <p className="sponsor__line">{coaching.line}</p>
              <p className="sponsor__detail" style={{ marginBottom: 18 }}>
                {coaching.detail}
              </p>
              <a
                className="btn"
                href={coaching.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Train with {coaching.coach.split(" ")[0]}
              </a>
            </div>

            <ReticleDivider />

            <p className="fineprint" style={{ textAlign: "center" }}>
              {site.person} / {site.phone}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
