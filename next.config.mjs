import withPWA from "next-pwa";

const nextPWAConfig = withPWA({
   dest: "public",
   runtimeCaching: [
      {
         urlPattern: /^https?.*/,
         handler: "NetworkFirst",
         options: {
            cacheName: "https-cache",
            expiration: {
               maxEntries: 200,
            },
         },
      },
   ],
});

const nextConfig = {
   compiler: {
      styledComponents: true,
   },
   output: "standalone",
   crossOrigin: "anonymous",
   reactStrictMode: false,

   images: {
      domains: ["bestinbd.com", "localhost"],
      minimumCacheTTL: 60,
      deviceSizes: [640, 750, 1080, 1200, 1920],
      formats: ["image/avif", "image/webp"],
   },
   transpilePackages: ["@studio-freight/compono"],

   webpack: (config, { dev }) => {
      if (config.cache && !dev) {
         config.cache = {
            type: "memory",
         };
      }
      return config;
   },

   eslint: {
      ignoreDuringBuilds: true,
   },

   optimizeFonts: true,

   experimental: {
      scrollRestoration: true,
   },

   async headers() {
      return [
         {
            source: "/(.*)",
            headers: [
               {
                  key: "X-Content-Type-Options",
                  value: "nosniff",
               },
               {
                  key: "X-Frame-Options",
                  value: "DENY",
               },
               {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
               },
            ],
         },
         {
            source: "/sw.js",
            headers: [
               {
                  key: "Content-Type",
                  value: "application/javascript; charset=utf-8",
               },
               {
                  key: "Cache-Control",
                  value: "no-cache, no-store, must-revalidate",
               },
               {
                  key: "Content-Security-Policy",
                  value: "default-src 'self'; script-src 'self'",
               },
            ],
         },
         {
            source: "/api/:path*",
            headers: [{ key: "Cache-Control", value: "s-maxage=86400, stale-while-revalidate=59" }],
         },
         {
            source: "/public/images/static/:path*",
            headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
         },
         {
            source: "/_next/static/:path*",
            headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
         },
         {
            source: "/",
            headers: [
               { key: "Link", value: "</_next/static/css/styles.css>; rel=preload; as=style" },
               { key: "Link", value: "</_next/static/js/main.js>; rel=preload; as=script" },
            ],
         },
      ];
   },

   async rewrites() {
      return [
         {
            source: "/api/:path*",
            destination: "https://cms.maximuseducation.com.au/:path*",
         },
      ];
   },

   swcMinify: true,
   productionBrowserSourceMaps: true,
   compress: true,
};

export default nextPWAConfig(nextConfig);
