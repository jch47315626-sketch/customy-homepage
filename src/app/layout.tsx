import type { Metadata, Viewport } from "next";
import { Jua } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/data/site";
import "./globals.css";

const jua = Jua({ weight: "400", subsets: ["latin"], variable: "--font-jua", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} ${site.nameEn} — ${site.tagline}`,
    template: `%s | ${site.name} ${site.nameEn}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} ${site.nameEn}`,
    description: site.description,
    images: ["/brand/logo-full.png"],
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbf8f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={jua.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-dvh">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
