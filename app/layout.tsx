import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const poppins = localFont({
  src: [
    { path: "../assets/fonts/Poppins-Regular.woff2", weight: "400", style: "normal" },
    { path: "../assets/fonts/Poppins-Medium.woff2", weight: "500", style: "normal" },
    { path: "../assets/fonts/Poppins-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../assets/fonts/Poppins-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shashank Chaubey — Developer & Data Enthusiast",
  description: "Portfolio of Shashank Chaubey, a developer interested in building useful applications and data experiences.",
  openGraph: {
    title: "Shashank Chaubey — Developer & Data Enthusiast",
    description: "Projects, technical interests, and contact information for Shashank Chaubey.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
