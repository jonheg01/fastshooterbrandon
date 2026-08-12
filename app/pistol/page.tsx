import { permanentRedirect } from "next/navigation";

// The Pistol category became Open 2011 on 2026-08-12. next.config.ts already
// serves a 308 for /pistol, so this route normally never renders. It stays as a
// second line of defence for any client side navigation that reaches it.
export default function PistolPage() {
  permanentRedirect("/open-2011");
}
