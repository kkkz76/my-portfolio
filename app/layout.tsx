import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/Component/scroll/SmoothScroll";

/* Load TT Common Pro font */
const ttCommonPro = localFont({
  src: [
    {
      path: "../public/fonts/TTCommonsProTrialThin.woff2", // ✅ Fix path
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/TTCommonsProTrialThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/TTCommonsProTrialLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/TTCommonsProTrialLightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/TTCommonsProTrialNormal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TTCommonsProTrialNormalItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/TTCommonsProTrialMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/TTCommonsProTrialMediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/TTCommonsProTrialBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/TTCommonsProTrialBoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-tt-common-pro",
  display: "swap",
});

/* Load TT Common Pro Mono font */
const ttCommonProMono = localFont({
  src: [
    {
      path: "../public/fonts/TTCommonsProMonoTrialLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/TTCommonsProMonoTrialLightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/TTCommonsProMonoTrialMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/TTCommonsProMonoTrialMediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-tt-common-pro-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khant Ko Ko Zaw",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ttCommonPro.variable} ${ttCommonProMono.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
