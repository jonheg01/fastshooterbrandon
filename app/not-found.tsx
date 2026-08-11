import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <div className="pagehead">
        <div className="wrap">
          <p className="eyebrow">404</p>
          <h1 className="pagehead__title">Miss</h1>
        </div>
      </div>
      <main id="main">
        <section className="section">
          <div className="wrap">
            <p className="lede">That page is not here. Head back to the start.</p>
            <Link className="btn" href="/">
              Back to Fast Shooter Brandon
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
