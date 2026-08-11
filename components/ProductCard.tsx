import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <p className="card__brand">{product.brand}</p>
      <h3 className="card__name">{product.name}</h3>
      <p className="card__desc">{product.description}</p>

      {product.specs.length > 0 && (
        <ul className="chips">
          {product.specs.map((s) => (
            <li className="chip" key={s}>
              {s}
            </li>
          ))}
        </ul>
      )}

      <div className="card__foot">
        <span className="card__price">
          {product.price ?? "See site for pricing"}
        </span>
        <a
          className="btn"
          href={product.affiliate_url ?? product.outbound_url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
        >
          View at {product.brand.split(" ")[0]}
        </a>
      </div>
    </article>
  );
}
