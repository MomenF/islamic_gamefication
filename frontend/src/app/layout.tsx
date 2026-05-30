import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "لعبة سور القرآن الكريم — PWA",
  description: "لعبة تفاعلية تعليمية لحفظ وفهم سور القرآن الكريم بأوضاع لعب مختلفة ومثيرة مع العائلة والأصدقاء",
  appleWebApp: {
    capable: true,
    title: "سور القرآن",
    statusBarStyle: "black-translucent",
  },
  applicationName: "لعبة سور القرآن",
};

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full antialiased`}>
      <body className="font-sans min-h-full bg-slate-950 text-slate-100 flex flex-col antialiased select-none">
        {children}
      </body>
    </html>
  );
}
