import Link from "next/link";
import PixelTrail from "@/components/PixelTrail";
import SectionHeading from "@/components/SectionHeading";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SERVICES, STATS, WORK, TESTIMONIALS, LOGOS } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
 <section className="relative overflow-hidden bg-[#062f5a] -mt-10 text-white">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

        {/* dotted pattern */}
        <div
          className="absolute right-[5%] top-[15%] hidden h-40 w-40 opacity-20 lg:block"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1.5px, transparent 1.5px)",
            backgroundSize: "17px 17px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN HERO
      ====================================================== */}
      <div className="relative z-10 mx-auto grid min-h-[650px] w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 md:px-10 lg:min-h-[700px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-14 xl:px-20">
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <div className="mx-auto max-w-[650px] text-center lg:mx-0 lg:text-left">
          {/* small badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b7df32] text-[#06305a]">
              <ShieldCheck size={15} strokeWidth={2.5} />
            </span>

            <span className="text-xs font-medium tracking-wide text-white/90 sm:text-sm">
Your Trusted Technology Partner
            </span>
          </div>

          {/* heading */}
          <h1 className="text-[38px] font-bold leading-[1.08] tracking-[-1.5px] sm:text-[48px] md:text-[58px] lg:text-[58px] xl:text-[68px]">
              Building Digital

            <span className="relative mx-2 inline-block text-blue">
                  Solutions

              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 10"
                fill="none"
              >
                <path
                  d="M3 7C51 2 118 2 197 5"
                  stroke="var(--blue)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            future.
          </h1>

          {/* description */}
          <p className="mx-auto mt-7 max-w-[580px] text-[15px] leading-7 text-white/75 sm:text-base md:text-lg lg:mx-0">
            Elevonix helps businesses turn ideas into powerful digital products
  through Web Development, Mobile Applications, AI Solutions, SEO and
  scalable software built for long-term growth.

          </p>

          {/* =====================================================
              CTA BUTTONS
          ====================================================== */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <button
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-blue
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-cyan
                hover:shadow-[0_15px_35px_rgba(47,111,237,0.25)]
                sm:w-auto
              "
            >
              Explore our solutions

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#06305a]
                  text-white
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowRight size={15} />
              </span>
            </button>

          
          </div>

          {/* =====================================================
              TRUST POINTS
          ====================================================== */}
        
        </div>

        {/* =====================================================
            RIGHT IMAGE
        ====================================================== */}
        <div className="relative mx-auto w-full max-w-[700px] lg:mx-0 lg:max-w-none">
          {/* image background shape */}
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-[#b9e538]/20 to-cyan-300/10 blur-xl" />

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              sm:rounded-[32px]
              lg:rounded-[38px]
            "
          >
            <img
              src="/home1.png"
              alt="Healthcare professionals working together"
              className="
                h-[340px]
                w-full
                object-cover
                sm:h-[450px]
                md:h-[520px]
                lg:h-[540px]
                xl:h-[580px]
              "
            />

            {/* dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#03284d]/55 via-transparent to-transparent" />

            {/* top floating label */}
           
          </div>

          {/* =====================================================
              FLOATING CARD - LEFT
          ====================================================== */}
          <div
            className="
              absolute
              -bottom-7
              left-3
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/20
              bg-white
              px-4
              py-3
              text-[#06305a]
              shadow-[0_20px_50px_rgba(0,0,0,0.18)]
              sm:left-7
              sm:px-5
              sm:py-4
              lg:-left-8
            "
          >
          </div>

          {/* =====================================================
              FLOATING CARD - RIGHT
          ====================================================== */}
          <div
            className="
              absolute
              -right-2
              bottom-16
              hidden
              rounded-2xl
              border
              border-white/15
              bg-[#b9e538]
              p-4
              text-[#06305a]
              shadow-xl
              sm:block
              lg:-right-5
            "
          >
            <p className="text-2xl font-bold">98%</p>
            <p className="max-w-[110px] text-xs font-medium leading-4">
              Customer satisfaction
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM CURVE
      ====================================================== */}
      <div className="absolute bottom-[-1px] left-0 w-full">
        <svg
          viewBox="0 0 1440 70"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 44C260 72 480 68 720 42C1010 10 1225 15 1440 35V70H0V44Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
  <div className="container-x">
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
      <div className="relative z-10">
        <h2 className="max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
          Web, Mobile and SEO
          <span className="block">Expertise</span>
        </h2>
        <div className="mt-8 flex gap-4 sm:mt-10">
          <div className="mt-[16px] h-[3px] w-10 shrink-0 bg-ink sm:w-12" />
 <div>
            <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
              Who are we
            </h3>

            <p className="mt-4 max-w-xl text-base leading-8 text-slate sm:text-lg">
              Elevonix is a technology solutions company focused on solving
              real business challenges. We specialize in Web Development,
              Mobile Applications, SEO, AI Solutions and scalable enterprise
              software.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-blue px-7 py-3.5 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-cyan hover:shadow-lg"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE / SHAPE */}
      <div className="relative flex min-h-[380px] items-center justify-center lg:min-h-[520px]">

        {/* Background Shape */}
        <div
          className="
            absolute
            -right-20
            top-1/2
            h-[430px]
            w-[430px]
            -translate-y-1/2
            rounded-[45%_55%_40%_60%/55%_40%_60%_45%]
            bg-[#eef0ff]
            sm:h-[500px]
            sm:w-[500px]
            lg:-right-28
            lg:h-[620px]
            lg:w-[620px]
          "
        />

        {/* Image */}
        <img
          src="/who.png"
          alt="Web and mobile development services"
          className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-xl"
        />
      </div>
    </div>
  </div>
</section>

     {/* SERVICES - STACKED SCROLL */}
<section className="relative bg-white py-20 sm:py-24">
  <div className="container-x">

    {/* SECTION HEADING */}
    <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <SectionHeading
        eyebrow="What we do"
        title="Our services"
        description="Explore our digital services designed to help businesses build, scale and grow."
      />

      <Link
        href="/services"
        className="hidden shrink-0 text-sm font-semibold text-blue hover:underline sm:inline-block"
      >
        View all services &rarr;
      </Link>
    </div>

    {/* STACKED CARDS */}
    <div className="relative">
      {SERVICES.map((service, index) => (
        <div
          key={service.slug}
          className="sticky mb-8"
          style={{
            top: `${90 + index * 14}px`,
            zIndex: index + 1,
          }}
        >
          <div
            className="
              relative
              mx-auto
              min-h-[420px]
              overflow-hidden
              rounded-[28px]
              border
              border-[#dce4ea]
              bg-white
              shadow-[0_8px_40px_rgba(15,23,42,0.08)]
              transition-all
              duration-500

              lg:min-h-[460px]
            "
          >
            <div
              className="
                grid
                min-h-[420px]
                grid-cols-1
                items-center
                gap-8
                p-6

                sm:p-8

                lg:min-h-[460px]
                lg:grid-cols-[0.9fr_1.1fr]
                lg:gap-14
                lg:p-10
              "
            >

              {/* LEFT CONTENT */}
              <div className="order-2 lg:order-1">

                {/* SERVICE ICON */}
                <div
                  className="
                    mb-8
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue/10
                    text-4xl
                  "
                >
                  {service.icon || "💻"}
                </div>

                {/* NUMBER */}
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue">
                  {String(index + 1).padStart(2, "0")}
                </p>

                {/* TITLE */}
                <h3
                  className="
                    font-display
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-ink

                    sm:text-4xl
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-5
                    max-w-xl
                    text-base
                    leading-7
                    text-slate

                    sm:text-lg
                    sm:leading-8
                  "
                >
                  {service.short}
                </p>

                {/* TAGS */}
                <div className="mt-7 flex flex-wrap gap-3">
                  {(service.tags || [
                    "Web Development",
                    "Modern Solutions",
                    "Scalable",
                  ]).map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        bg-[#eaf8f7]
                        px-5
                        py-2
                        text-xs
                        font-semibold
                        text-[#079f9b]
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <Link
                  href={`/services/${service.slug}`}
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-blue
                    transition
                    hover:gap-3
                  "
                >
                  Explore Service
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="order-1 lg:order-2">
                <div
                  className="
                    relative
                    h-[230px]
                    overflow-hidden
                    rounded-2xl
                    bg-[#f4f7fb]

                    sm:h-[320px]

                    lg:h-[380px]
                  "
                >
                  <img
                    src={service.image || "/service-default.jpg"}
                    alt={service.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-700
                      hover:scale-105
                    "
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>

    {/* MOBILE LINK */}
    <Link
      href="/services"
      className="mt-10 inline-block text-sm font-semibold text-blue hover:underline sm:hidden"
    >
      View all services &rarr;
    </Link>

  </div>
</section>

      {/* WHY / DRIVEN SECTION */}
      <section className="border-y border-line-dark bg-ink py-24 text-white">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-cyan">Why Elevonix</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Built by people who ship, not just plan.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/65">
              Digital is table stakes now, not a differentiator on its own.
              What matters is execution &mdash; picking the right tools for
              your actual constraints, and being honest when a shortcut will
              cost you later. That's the partnership we offer: contemporary
              technology, applied with judgment.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:underline"
            >
              Learn who we are &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              { t: "Discovery", d: "We map the real problem before touching code." },
              { t: "Design", d: "Interfaces tested with real users, not guesses." },
              { t: "Build", d: "Working software in your hands every sprint." },
              { t: "Support", d: "We stay on after launch, not just before it." },
            ].map((step) => (
              <div
                key={step.t}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <p className="font-display text-lg font-semibold">{step.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-24">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Recent projects"
              description="A sample of platforms and products we've taken from first sketch to production."
            />
            <Link
              href="/work"
              className="hidden shrink-0 text-sm font-semibold text-blue hover:underline sm:inline-block"
            >
              See full portfolio &rarr;
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WORK.slice(0, 3).map((w) => (
              <Link
                key={w.slug}
                href="/work"
                className="card-hover group overflow-hidden rounded-xl border border-line bg-white"
              >
                <div className="h-40 relative overflow-hidden">
                  <img
                    src={w.image}
                    alt={w.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="eyebrow text-slate">
                    {w.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                    {w.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {w.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Client feedback"
            title="What partners say"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-xl border border-line bg-white p-7"
              >
                <p className="text-2xl leading-none text-blue">&ldquo;</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                  {t.quote}
                </p>
                <div className="mt-6 border-t border-line pt-4">
                  <p className="font-display text-sm font-semibold text-ink">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-2xl bg-ink px-8 py-16 text-center sm:px-16">
            <p className="eyebrow text-cyan">Let's build something</p>
            <h2 className="mx-auto mt-3 max-w-xl font-display text-3xl font-semibold text-white sm:text-4xl">
              Have a project brief? Let's take a look at it together.
            </h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-cyan"
              >
                Start a Conversation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
