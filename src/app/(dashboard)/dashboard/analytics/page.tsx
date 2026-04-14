import AnalyticsDashboard from "@/components/dashboard/analytics/AnalyticsDashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics | InstaShop Dashboard",
};

export default function AnalyticsPage() {
  return <AnalyticsDashboard />;
}
