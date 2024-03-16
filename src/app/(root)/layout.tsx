import type { Metadata, Viewport } from "next";
import { Barlow, Inter, Public_Sans } from "next/font/google";
import "../../common/styles/globals.css";
import "../../common/styles/animation.css";
import Providers from "@/common/providers/Provider";
import MainLayout from "@/common/layouts/MainLayout";

const interFont = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-inter",
});

export const publicSansFont = Public_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-publicSans",
});

export const barlowFont = Barlow({
  weight: ["900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-barlow",
});

export const viewport: Viewport = {
  themeColor: "black",
};
export const titleBase = "long";
export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: `${titleBase} | portfolio`,
  description: "Web portfolio by developer long",
  openGraph: {
    title: `${titleBase} | portfolio`,
    description: "Web portfolio by developer long",
    images: ["/meta.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${titleBase} | portfolio`,
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
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
