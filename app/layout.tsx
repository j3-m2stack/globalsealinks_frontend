import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { inter } from "@/lib/fonts";


export const metadata: Metadata = {
  title: "Global Sea Links - Premium Import Export Company | Quality Agro Products",
  description: "Global Sea Links is a trusted supplier and exporter of premium-quality cattle feed, agro commodities, and industrial materials. Serving 50+ countries worldwide with assured quality and competitive pricing.",
  keywords: "import export, agro products, cattle feed, soyabean, chickpeas, rice, metal scrap, global trade, Global Sea Links",
  authors: [{ name: "Global Sea Links" }],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Global Sea Links - Connecting Global Markets with Quality Agro Products",
    description: "Trusted supplier and exporter of cattle feed and agro commodities",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
