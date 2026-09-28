import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Self-hosted variable fonts
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "500 700",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "400 600",
  display: "swap",
});

const jetbrains = localFont({
  src: "./fonts/JetBrainsMono.ttf",
  variable: "--font-jetbrains",
  weight: "400 500",
  display: "swap",
});

export const metadata = {
  title: "Elevonix Solutions | Software & Digital Engineering",
  description:
    "Elevonix Solutions builds web, mobile and AI-driven software for businesses ready to move faster. Product strategy, engineering and support under one roof.",
  verification: {
    google: "ebjLZd0Tq9sc8NH7n5FD4SYGjAe7g9IlHtl26wwuiE8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <Navbar />

        <main className="flex-1 pt-[80px]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}