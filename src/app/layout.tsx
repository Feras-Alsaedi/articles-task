import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ReduxProvider from "@/redux/provider";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/contexts/theme-context/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Posts Task",
  description: "Posts Task Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ThemeContextProvider>
            <Toaster position={"top-center"} />

            <Navbar />
            <div className="container mx-auto ">
              <div className="overflow-y-auto h-[90vh]">{children}</div>
            </div>
          </ThemeContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
