import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Content-Security-Policy is set per request in middleware.ts so it can carry
  // a nonce. A flat script-src 'self' blocks React's streaming inline scripts.
];

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // The Pistol category became Open 2011 on 2026-08-12. Keep every link,
      // bookmark, and QR code that was printed against /pistol working.
      { source: "/pistol", destination: "/open-2011", permanent: true },
    ];
  },
};

export default nextConfig;
