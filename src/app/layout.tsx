import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Spotlight from "@/components/layout/spotlight/Spotlight";
import Header from "@/components/layout/header/Header";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import { Icon } from "@/components/ui/icon/Icon";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Raphaël Bard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="dark" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Spotlight />
          <div className="container px-6 md:px-12">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <div className="py-24 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between">
                <Header />
                <Sidebar />
                <ul className="flex gap-4 mt-6 text-2xl">
                  <li className="shrink-0">
                    <Link
                      className="block w-fit"
                      target="_blank"
                      href="https://github.com/raph-bard"
                    >
                      <Icon name="github" />
                    </Link>
                  </li>
                  <li className="shrink-0">
                    <Link
                      className="block w-fit"
                      target="_blank"
                      href="https://www.linkedin.com/in/rapha%C3%ABl-bard-8b1ba2133/"
                    >
                      <Icon name="linkedin" />
                    </Link>
                  </li>
                </ul>
              </div>
              <main className="flex min-h-screen items-center justify-center lg:w-[52%]">
                <div className="container pt-24">{children}</div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
