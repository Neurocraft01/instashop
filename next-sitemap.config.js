/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || "https://instashop.in",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/dashboard", "/api", "/admin", "/onboarding"] },
    ],
  },
  exclude: ["/dashboard/*", "/api/*", "/admin/*", "/onboarding/*", "/sign-in", "/sign-up"],
  generateIndexSitemap: false,
  additionalPaths: async () => [
    { loc: "/", changefreq: "weekly", priority: 1.0 },
    { loc: "/pricing", changefreq: "monthly", priority: 0.9 },
    { loc: "/about", changefreq: "monthly", priority: 0.8 },
    { loc: "/contact", changefreq: "yearly", priority: 0.7 },
  ],
};
