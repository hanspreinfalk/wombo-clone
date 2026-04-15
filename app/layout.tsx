import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dream by WOMBO",
  description: "AI Art Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#111111] text-white">
        {children}
        <Script
          src="https://echo-monorepo-widget.vercel.app/widget.js"
          data-organization-id="org_3CPkgcKIBSJjiZkls2iN5K6BYvD"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
