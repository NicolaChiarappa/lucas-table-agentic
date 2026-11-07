import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Inchioda la root del workspace a questa cartella.
  // Senza questo, un package-lock.json vagante in ~/ faceva inferire a
  // Turbopack una root sbagliata, rompendo la risoluzione del CSS in dev.
  turbopack: {
    root: path.resolve(__dirname),
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
        ],
      },
    ];
  },

};

export default nextConfig;
