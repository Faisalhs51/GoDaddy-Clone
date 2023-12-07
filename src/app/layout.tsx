import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider ";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Domain Names, Websites, Hosting & Online Marketing Tools - GoDaddy IN",
  description:
    "Your all in one solution to grow online. Start a free trial to create a beautiful website, get a domain name, fast hosting, online marketing and award-winning 24/7 support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>{children}</body>
      </ReduxProvider>
    </html>
  );
}
