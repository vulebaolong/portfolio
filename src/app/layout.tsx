import Providers from "@/common/providers/Provider";
import type { Metadata, Viewport } from "next";
import { Barlow, Inter, Public_Sans } from "next/font/google";
import "../common/styles/animation.css";
import "../common/styles/globals.css";
import { TITLE_BASE } from "@/contants/app.constants";

const interFont = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-inter",
});

const publicSansFont = Public_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-publicSans",
});

const barlowFont = Barlow({
  weight: ["900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-barlow",
});

export const viewport: Viewport = {
  themeColor: "black",
};
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: `${TITLE_BASE} | portfolio`,
  description: "Web portfolio by developer long",
  openGraph: {
    title: `${TITLE_BASE} | portfolio`,
    images: ["/meta.png"],
    description: "Web portfolio by developer long",
    url: "https://portfolio-git-main-vulebaolong.vercel.app/",
  },
  twitter: {
    images: ["/meta.png"],
    card: "summary_large_image",
    title: `${TITLE_BASE} | portfolio`,
    description: "Web portfolio by developer long",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interFont.variable} ${publicSansFont.variable} ${barlowFont.variable}`}>
      <body className={`${interFont.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
