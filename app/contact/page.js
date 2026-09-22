import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Elevonix Solutions",
  description:
    "Get in touch with Elevonix Solutions to discuss your next web, mobile, cloud or AI project.",
};

const DETAILS = [
  {
    label: "Email",
    value: "elevonixsolutions503@gmail.com",
    href: "mailto:elevonixsolutions503@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 9893706435",
    href: "tel:+919893706435",
  },
  {
    label: "Studio",
    value: "Indore, Madhya Pradesh, India",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line circuit-line py-20 sm:py-24">
        <div className="container-x">
          <p className="eyebrow text-blue">// Contact</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Let&apos;s talk about your project.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            Send us a brief, a half-formed idea, or a link to something
            that&apos;s broken. We reply to every message within one business
            day.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              Reach us directly
            </h2>
            <ul className="mt-6 space-y-5">
              {DETAILS.map((d) => (
                <li key={d.label}>
                  <p className="eyebrow text-blue">{d.label}</p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="mt-1 block text-base font-medium text-ink transition-colors hover:text-blue"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base font-medium text-ink">
                      {d.value}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-xl border border-line bg-paper-2 p-6">
              <p className="font-display text-sm font-semibold text-ink">
                Prefer a quick call?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Mention your timeline in the message and we&apos;ll suggest a
                slot for an introductory call within your first reply.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
