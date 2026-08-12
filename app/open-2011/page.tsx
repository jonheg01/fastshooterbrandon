import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

// Rendered per request so the nonce based CSP in middleware.ts applies.
// The page data is a static import, so the render cost is negligible.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Open 2011",
  description:
    "The Open 2011, the dot, the holster, the belt, the pouches, and the magazines Brandon Hegreness competes with.",
};

export default function Open2011Page() {
  return (
    <CategoryPage
      categoryKey="open2011"
      intro="The gun, the dot, and everything on the belt. Rig details matter more than most people think, so the belt and pouch specs are here too."
    />
  );
}
