import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const homePage = await client.getSingle("homepage");

  return {
    // title: homePage.data.site_title || "Flowrise FallBack",
    // description:
    //   homePage.data.meta_description || "Flowrise is the relaxing app for you.",
    // openGraph: {
    //   images: [homePage.data.og_image.url || ""],
    // },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
