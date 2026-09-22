import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  "Web & App Development",
  "Cloud & DevOps",
  "AI & Data Solutions",
  "UI/UX Design",
  "Support & Maintenance",
];

const COMPANY = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Elevonix Solutions"
                width={36}
                height={36}
                className="rounded-md"
              />
              <span className="font-display font-semibold text-[1.05rem]">
                Elevonix Solutions
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              We design and engineer digital products for businesses that
              refuse to stand still &mdash; from first sketch to production
              and beyond.
            </p>
          </div>

          <div>
            <p className="eyebrow text-cyan">Services</p>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-cyan">Company</p>
            <ul className="mt-4 space-y-2.5">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-cyan">Get in touch</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="mailto:elevonixsolutions503@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  elevonixsolutions503@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+9893706435"
                  className="transition-colors hover:text-white"
                >
                  +91 9893706435
                </a>
              </li>
              <li className="text-white/60">
                indore, Madhya Pradesh, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Elevonix Solutions. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <span className="cursor-default">Privacy Policy</span>
            <span className="cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
