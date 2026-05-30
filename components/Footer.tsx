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
    <footer className="mt-10 w-full max-w-[100vw] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 pb-[calc(5.75rem+env(safe-area-inset-bottom))] pt-12 sm:px-6 lg:pb-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="min-w-0 md:col-span-2 lg:col-span-2">
            <BrandLogo href="/" iconSize={40} />
            <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
              Luxury group travel meets Instagram storytelling. We design trips
              that feel cinematic, youthful, and effortless—so your memories
              look as good as they feel.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="min-w-0">
              <div className="text-sm font-semibold text-white">{col.title}</div>
              <div className="mt-3 grid gap-2">
                {col.links.map((l) => (
                  <Link
                    key={l.href + l.label}
                    href={l.href}
                    className="break-words text-sm text-white/70 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <Link
            href="/contact"
            className="mx-auto flex min-h-[44px] w-full max-w-lg items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[rgba(5,9,21,0.55)] px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-accent/50 md:max-w-md"
          >
            <span className="material-icons text-accent">chat</span>
            Talk to a travel specialist
          </Link>
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
