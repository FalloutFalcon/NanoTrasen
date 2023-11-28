import type { Metadata } from "next";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Solgov",
  description: "Company website for Solgov",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-mono text-solgov-white-light">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
