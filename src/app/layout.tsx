import type { Metadata } from "next";
import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";



const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "InstaShop — Turn Your Social Media Into a Real Business",
    template: "%s | InstaShop",
  },
  description:
    "InstaShop gives Instagram sellers their own branded mini-store, order dashboard & WhatsApp automation — free to start. Built for Indian sellers.",
  keywords: ["instagram seller", "mini store", "india ecommerce", "whatsapp orders", "instashop"],
  openGraph: {
    title: "InstaShop — The Business OS for Social Media Sellers",
    description: "Stop losing orders in DMs. Get your own store, dashboard & WhatsApp automation.",
    type: "website",
    url: process.env.NEXT_PUBLIC_APP_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaShop",
    description: "Turn Your Social Media Presence Into a Real Business",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={`${jakarta.variable} ${epilogue.variable} font-sans antialiased bg-[#f9f6f3]`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <TooltipProvider>
            {children}
            <Toaster richColors position="top-right" />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
