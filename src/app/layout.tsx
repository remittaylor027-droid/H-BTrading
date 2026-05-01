import type { Metadata } from "next";
import "./globals.css";
import ScrollObserver from "@/components/ScrollObserver";

export const metadata: Metadata = {
  title: "H&B Trading | Visa Consultancy",
  description: "Expert guidance for work permits, visit visas, and study visas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
