import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

// Rendered per request so the nonce based CSP in middleware.ts applies.
// The page data is a static import, so the render cost is negligible.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "CO",
  description:
    "Carry Optics. The Canik pistols, grip weight, basepads, and magwell Brandon Hegreness runs, with specs and prices from the manufacturers.",
};

export default function CoPage() {
  return (
    <CategoryPage
      categoryKey="co"
      intro="Carry Optics is the Canik side of the safe. The gun is close to stock, so the work goes into grip weight, capacity, and how fast the magazine finds the well."
    />
  );
}
