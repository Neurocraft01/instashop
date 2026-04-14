import type { Metadata } from "next";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";

export const metadata: Metadata = {
  title: "Terms of Service — InstaShop",
  description: "The terms governing your use of the InstaShop platform.",
};

export default function TermsPage() {
  const updated = "14 April 2025";
  return (
    <div style={{ background: "#f9f6f3", fontFamily: "Plus Jakarta Sans, sans-serif", color: "#2f2f2d" }}>
      <PublicNavbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold mb-2" style={{ color: "#745700" }}>Legal</p>
          <h1 className="text-4xl md:text-5xl font-black mb-3" style={{ fontFamily: "Epilogue, sans-serif", color: "#2B1B3D" }}>Terms of Service</h1>
          <p className="text-sm mb-12" style={{ color: "#5c5b59" }}>Last updated: {updated}</p>

          <div className="space-y-10 text-sm leading-relaxed" style={{ color: "#5c5b59" }}>
            {[
              {
                title: "1. Acceptance of Terms",
                body: `By creating an account on InstaShop, you agree to these Terms of Service. If you do not agree, please do not use the platform. These terms are governed by Indian law.`,
              },
              {
                title: "2. Free Trial & Subscriptions",
                body: `InstaShop offers a 14-day free trial with full access to all features of the plan you select. No credit card is required during the trial.

After the trial period ends, your store moves to a read-only state unless you subscribe to a paid plan. Your data is not deleted.

Subscriptions renew automatically each month on the date you subscribed. You may cancel at any time from Settings → Billing. Cancellation takes effect at the end of the current billing cycle.`,
              },
              {
                title: "3. Payments & Refunds",
                body: `Payments are processed via Razorpay. We accept UPI, credit/debit cards, and net banking.

Subscription fees are non-refundable except:
- If InstaShop is unavailable for more than 72 consecutive hours due to our fault
- If you were double-charged

To request a refund, email billing@instashop.in within 7 days of the charge.`,
              },
              {
                title: "4. Acceptable Use",
                body: `You agree NOT to use InstaShop to:
- Sell prohibited goods (weapons, drugs, counterfeit products, adult content)
- Violate any Indian law (IT Act, FEMA, Consumer Protection Act)
- Spam your customers with unsolicited messages
- Collect customer data for purposes outside of fulfilling their orders
- Impersonate another seller or misrepresent your products

Violation of these terms will result in immediate suspension without refund.`,
              },
              {
                title: "5. Your Responsibilities as a Seller",
                body: `You are solely responsible for:
- The accuracy of your product listings, prices, and descriptions
- Fulfilling orders placed by your customers
- Complying with GST and other applicable tax regulations
- Obtaining any required business licenses (FSSAI, etc.)
- Handling disputes with your customers

InstaShop is a technology platform, not a marketplace. We are not party to any transaction between you and your customers.`,
              },
              {
                title: "6. Intellectual Property",
                body: `You retain ownership of all content you upload (product images, store name, descriptions). By uploading content, you grant InstaShop a license to display it on your store pages.

InstaShop's interface, code, design, and branding are our intellectual property. You may not copy, reverse-engineer, or resell any part of the platform.`,
              },
              {
                title: "7. Limitation of Liability",
                body: `InstaShop is not liable for:
- Loss of revenue due to downtime (beyond our SLA)
- Disputes between you and your customers
- Third-party service failures (Cloudinary, Razorpay, etc.)
- Indirect, consequential, or special damages

Our maximum liability to you in any month is limited to the subscription fee you paid in that month.`,
              },
              {
                title: "8. Service Availability",
                body: `We target 99.5% monthly uptime. Scheduled maintenance will be communicated 24 hours in advance. We are not responsible for downtime caused by third-party services, internet outages, or events outside our control.`,
              },
              {
                title: "9. Termination",
                body: `You may delete your account at any time from Settings. We may suspend or terminate accounts that violate these terms or remain unpaid for more than 30 days after their trial ends.

Upon termination, you may request a data export within 30 days.`,
              },
              {
                title: "10. Changes to Terms",
                body: `We may update these terms with 14 days' notice via email or in-app notification. Your continued use after the notice period constitutes acceptance.`,
              },
              {
                title: "11. Contact & Grievances",
                body: `For support: support@instashop.in\nFor billing: billing@instashop.in\nFor legal: legal@instashop.in\n\nGrievance Officer: As required under Information Technology Act, 2000 — contact legal@instashop.in for formal grievances.`,
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-black mb-3" style={{ color: "#2B1B3D" }}>{section.title}</h2>
                <p className="whitespace-pre-line">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
