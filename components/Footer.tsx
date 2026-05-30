import Link from "next/link";
import BrandLogo from "./BrandLogo";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/trips", label: "Trips" },
      { href: "/gallery", label: "Gallery" },
      { href: "/about", label: "About Infinity Tripsters" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { href: "/contact", label: "Contact / Inquiry" },
      { href: "/contact", label: "WhatsApp" },
    ],
  },
  {
    title: "For travelers",
    links: [
      { href: "/contact", label: "Travel consultation" },
      { href: "/trips", label: "Find your group" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <BrandLogo href="/" iconSize={40} />
            <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
              Luxury group travel meets Instagram storytelling. We design trips
              that feel cinematic, youthful, and effortless—so your memories
              look as good as they feel.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold text-white">{col.title}</div>
              <div className="mt-3 grid gap-2">
                {col.links.map((l) => (
                  <Link
                    key={l.href + l.label}
                    href={l.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-white/55">
            © {new Date().getFullYear()} Infinity Tripsters. All rights
            reserved.
          </div>
          <div className="text-sm text-white/55">
            Built for premium group journeys. Mock UI only.
          </div>
        </div>
      </div>
    </footer>
  );
}

