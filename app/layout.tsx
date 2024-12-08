import { Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const fontSans = Geist_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "|_APPSTARTER|",
  description: "Created with Next.js 15, Drizzle ORM and Auth.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.className} antialiased dark:bg-neutral-900 dark:text-white`}
      >
        <Navbar />
        <main className="max-w-screen-xl mx-auto py-20 px-4 sm:px-6 xl:px-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
