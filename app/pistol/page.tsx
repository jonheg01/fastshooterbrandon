import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

// Rendered per request so the nonce based CSP in middleware.ts applies.
// The page data is a static import, so the render cost is negligible.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pistol",
  description:
    "The pistol, the dot, the holster, the belt, the pouches, and the magazines Brandon Hegreness competes with.",
};

export default function PistolPage() {
  return (
    <CategoryPage
      categoryKey="pistol"
      intro="The gun, the dot, and everything on the belt. Rig details matter more than most people think, so the belt and pouch specs are here too."
    />
  );
}
