import Link from "next/link";
import { IdentityBar } from "@/components/IdentityBar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ReticleDivider } from "@/components/Reticle";
import { categories, type CategoryKey } from "@/lib/site";
import { productsFor } from "@/lib/products";

export function CategoryPage({
  categoryKey,
  intro,
}: {
  categoryKey: CategoryKey;
  intro: string;
}) {
  const category = categories.find((c) => c.key === categoryKey)!;
  const items = productsFor(categoryKey);
  const others = categories.filter((c) => c.key !== categoryKey);

  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <p className="eyebrow">The gear</p>
          <h1 className="pagehead__title">{category.name}</h1>
        </div>
      </div>

      <IdentityBar />

      <main id="main">
        <section className="section">
          <div className="wrap">
            <p className="lede">{intro}</p>
            <div className="gear">
              {items.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>

            <ReticleDivider />

            <div className="navgrid">
              {others.map((c) => (
                <Link className="navcard" href={c.slug} key={c.key}>
                  <h2 className="navcard__title">{c.name}</h2>
                  <p className="navcard__blurb">{c.blurb}</p>
                  <p className="navcard__meta">
                    {productsFor(c.key).length} items
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
