import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — InstaShop",
  description: "How InstaShop collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  const updated = "14 April 2025";
  return (
    <div style={{ background: "#f9f6f3", fontFamily: "Plus Jakarta Sans, sans-serif", color: "#2f2f2d" }}>
      <PublicNavbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold mb-2" style={{ color: "#745700" }}>Legal</p>
          <h1 className="text-4xl md:text-5xl font-black mb-3" style={{ fontFamily: "Epilogue, sans-serif", color: "#2B1B3D" }}>Privacy Policy</h1>
          <p className="text-sm mb-12" style={{ color: "#5c5b59" }}>Last updated: {updated}</p>

          <div className="prose prose-slate max-w-none space-y-10" style={{ color: "#2f2f2d" }}>
            {[
              {
                title: "1. Who We Are",
                body: `InstaShop (referred to as "we", "us", or "our") is an e-commerce SaaS platform that helps social media sellers (Instagram, Facebook, YouTube, and beyond) in India launch branded stores and manage orders. Our registered entity operates from India. For any privacy-related queries, contact us at: privacy@instashop.in.`,
              },
              {
                title: "2. Information We Collect",
                body: `When you register and use InstaShop, we collect:
                
**Account Information**: Name, email address, phone number, and password (stored as a one-way bcrypt hash).

**Store Information**: Store name, logo, product images, pricing, inventory data, and order details.

**Customer Data You Provide**: When your customers place orders through your InstaShop store, their name, phone, email, and delivery address are stored in your dashboard. You control this data.

**Usage Data**: Pages visited, time on site, clicks, errors — collected anonymously for platform improvement.

**Payment Data**: We do not store credit card or UPI numbers. If you use Razorpay, payments are processed by Razorpay and governed by their Privacy Policy.`,
              },
              {
                title: "3. How We Use Your Information",
                body: `We use your information to:
- Operate and maintain your InstaShop store and dashboard
- Send transactional emails (order confirmations, password resets)
- Send low-stock alerts and platform announcements you've opted into
- Improve platform features based on anonymised usage data
- Comply with legal obligations

We do not sell your data to third parties. Ever.`,
              },
              {
                title: "4. Data Storage & Security",
                body: `Your data is stored in a PostgreSQL database hosted on Supabase (AWS, Singapore region). Images are stored on Cloudinary CDN. We use industry-standard encryption in transit (HTTPS/TLS) and at rest.

Access to production data is restricted to InstaShop core team members on a need-to-know basis.`,
              },
              {
                title: "5. Cookies",
                body: `We use session cookies for authentication (keeping you logged in) and may use analytics cookies to understand traffic patterns. We do not use third-party advertising cookies.`,
              },
              {
                title: "6. Your Rights",
                body: `Under India's Digital Personal Data Protection Act (DPDPA), you have the right to:
- Access the personal data we hold about you
- Request correction of inaccurate data
- Request deletion of your account and associated data
- Raise a grievance with our Data Protection Officer

To exercise any right, email: privacy@instashop.in`,
              },
              {
                title: "7. Data Retention",
                body: `We retain your account data for as long as your account is active. If you delete your account, we purge your personal data within 30 days, except where retention is required by law (e.g., financial transaction records for 7 years).`,
              },
              {
                title: "8. Children's Privacy",
                body: `InstaShop is not intended for use by individuals under the age of 18. We do not knowingly collect data from minors.`,
              },
              {
                title: "9. Changes to This Policy",
                body: `We may update this policy. If we make material changes, we will notify you via email or an in-app banner at least 7 days before the change takes effect.`,
              },
              {
                title: "10. Contact",
                body: `For privacy concerns, contact: privacy@instashop.in\nData Protection Officer: dpo@instashop.in\n\nInstaShop Technologies, India.`,
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-black mb-3" style={{ color: "#2B1B3D" }}>{section.title}</h2>
                <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "#5c5b59" }}>{section.body}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
