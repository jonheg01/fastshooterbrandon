import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

// Rendered per request so the nonce based CSP in middleware.ts applies.
// The page data is a static import, so the render cost is negligible.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "PCC",
  description:
    "Pistol caliber carbine basepads and magazine extensions Brandon Hegreness runs, from Taylor Freelance.",
};

export default function PccPage() {
  return (
    <CategoryPage
      categoryKey="pcc"
      intro="Pistol caliber carbine comes down to capacity. Fewer reloads means fewer places to lose time."
    />
  );
}
