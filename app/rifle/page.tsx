import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

// Rendered per request so the nonce based CSP in middleware.ts applies.
// The page data is a static import, so the render cost is negligible.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Rifle",
  description:
    "The optic, mounts, trigger, safety, compensator, and bipod Brandon Hegreness competes with. Specs and prices from the manufacturers.",
};

export default function RiflePage() {
  return (
    <CategoryPage
      categoryKey="rifle"
      intro="Glass first, then the parts that make the gun repeatable. This is the rifle setup, from the scope down to the bipod."
    />
  );
}
