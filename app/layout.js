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
  weight: "400 520",
  display: "swap",
});

export const metadata = {
  title: "ElevonixTech Solutions | Software & Digital Engineering",
  description:
    "ElevonixTech Solutions builds web, mobile and AI-driven software for businesses ready to move faster. Product strategy, engineering and support under one roof.",
    verification: {
    google: "ebjLZd0Tq9sc8NH7n5FD4SYGjAe7g9IlHtl26wwuiE8",
  },
};
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ElevonixTech Solutions",
  url: "https://www.elevonixtechsolutions.com/",
  logo: "https://www.elevonixtechsolutions.com/logo.jpeg",
  description:
    "ElevonixTech Solutions builds web, mobile and AI-driven software for businesses.",
  sameAs: [
    "https://www.linkedin.com/company/elevonix-solutions/",
    "https://www.instagram.com/elevonix_tech_solutions/",
  ],
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
