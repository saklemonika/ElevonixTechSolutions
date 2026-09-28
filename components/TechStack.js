"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

// Install first:  npm i react-icons
import {
  SiFigma,
  SiCanvas,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiBootstrap,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiLaravel,
  SiWordpress,
  SiShopify,
  SiFlutter,
  SiIos,
  SiKotlin,
  SiFirebase,
  SiAndroid,
  SiSwift,
  SiMongodb,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { FaJava, FaDatabase, FaAd } from "react-icons/fa";

// =====================================================
// DATA — each icon carries its official brand color
// =====================================================
const TABS = ["UI/UX", "Frontend", "Backend", "Mobile App", "Database"];

const STACK = {
  "UI/UX": [
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Canva", icon: SiCanvas, color: "#00C4CC" },
    { name: "Adobe XD", icon: FaAd, color: "#FF61F6" },
  ],
  Frontend: [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Java", icon: FaJava, color: "#E76F00" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
  ],
  "Mobile App": [
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "iOS", icon: SiIos, color: "#000000" },
    { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    { name: "React Native", icon: SiReact, color: "#61DAFB" },
    { name: "Java", icon: FaJava, color: "#E76F00" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Android", icon: SiAndroid, color: "#3DDC84" },
    { name: "Swift", icon: SiSwift, color: "#F05138" },
  ],
  Database: [
    { name: "SQL", icon: FaDatabase, color: "#336791" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  ],
};

export default function TechStack() {
  const [active, setActive] = useState("Mobile App");
  const items = STACK[active];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our stack"
          title={`${active} technologies we work on`}
          description="We work with the most reliable, modern tools for every layer of your product."
          align="center"
        />

        {/* TABS */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {TABS.map((tab) => {
            const isActive = tab === active;
            return (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`cursor-pointer rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "bg-ink text-white"
                    : "bg-[#f4f7fb] text-slate hover:bg-[#eaf0f6]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* ICON GRID — wraps & centers, so any count (3 to 8) looks right */}
        <div className="mt-14 flex flex-wrap items-start justify-center gap-x-6 gap-y-8">
          {items.map(({ name, icon: Icon, color }) => (
            <div
              key={`${active}-${name}`}
              className="flex w-28 flex-col items-center gap-3 text-center"
            >
              <div className="card-hover flex h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
                <Icon size={38} color={color} aria-hidden="true" />
              </div>
              <p className="text-sm font-medium text-ink">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}