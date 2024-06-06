import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ranchi's smile",
  description:
    "A dental clinic for everyone, providing quality care at affordable prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/tooth.svg" sizes="any" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
