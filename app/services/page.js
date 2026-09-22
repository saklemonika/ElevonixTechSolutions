import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES } from "@/lib/data";

export const metadata = {
  title: "Services | Elevonix Solutions",
  description:
    "Web and app development, cloud and DevOps, AI and data solutions, UI/UX design, digital transformation, and support &mdash; end-to-end software services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line circuit-line py-20 sm:py-24">
        <div className="container-x">
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Everything a product needs, under one roof.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            From first prototype to the systems running behind the scenes,
            we cover the full lifecycle of a digital product &mdash; and stay on
            to support what we build.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x">
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
                          h-20
                          w-20
                          items-center
                          justify-center
                          rounded-xl
                          bg-blue/10
                          text-3xl
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
                        "
                      >
                        {service.title}
                      </h3>

                      {/* SHORT DESCRIPTION */}
                      <p
                        className="
                          mt-4
                          text-base
                          leading-7
                          text-slate
                        "
                      >
                        {service.short}
                      </p>

                      {/* FULL DESCRIPTION */}
                      <p
                        className="
                          mt-4
                          text-sm
                          leading-7
                          text-slate
                        "
                      >
                        {service.description}
                      </p>

                      {/* POINTS / TAGS */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.points.map((point) => (
                          <span
                            key={point}
                            className="
                              rounded-full
                              border
                              border-[#dce4ea]
                              bg-[#f4f7fb]
                              px-4
                              py-2
                              text-xs
                              font-semibold
                              text-[#079f9b]
                            "
                          >
                            {point}
                          </span>
                        ))}
                      </div>

                      {/* BUTTON */}
                      <Link
                        href="/contact"
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
                        <span>&rarr;</span>
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
            href="/contact"
            className="mt-10 inline-block text-sm font-semibold text-blue hover:underline sm:hidden"
          >
            View all services &rarr;
          </Link>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we engage"
            title="A process built for clarity"
            description="No matter the service, engagements follow the same disciplined shape."
            light
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Discover", d: "We study your users, constraints and goals before proposing anything." },
              { t: "Design", d: "Wireframes and prototypes validated with real feedback." },
              { t: "Build", d: "Iterative delivery, with working software every sprint." },
              { t: "Support", d: "Monitoring, fixes and iteration after you launch." },
            ].map((step, i) => (
              <div
                key={step.t}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <span className="eyebrow text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-lg font-semibold">
                  {step.t}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-x">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-line bg-white px-8 py-14 text-center sm:px-16">
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Not sure which service fits? Tell us the problem instead.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
