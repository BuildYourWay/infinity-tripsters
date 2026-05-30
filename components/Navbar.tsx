"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import BrandLogo from "./BrandLogo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/trips", label: "Trips" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [closing, setClosing] = React.useState(false);

  React.useEffect(() => {
    // Sync menu state on route changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
    setClosing(false);
  }, [pathname]);

  const closeMenu = React.useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 200);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mt-3 rounded-2xl border border-white/10 bg-[rgba(5,9,21,0.55)] backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <BrandLogo iconSize={36} priority />

              <nav className="hidden items-center gap-6 md:flex">
                {navItems.map((item) => {
                  const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={clsx(
                        "text-sm transition-colors",
                        active ? "text-white" : "text-white/70 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  className="ml-2 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(45,125,255,0.25)] transition hover:brightness-110"
                >
                  Book a consult
                  <span className="material-icons text-white">arrow_forward</span>
                </Link>
              </nav>

              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
                aria-label="Open menu"
                onClick={() => {
                  setClosing(false);
                  setOpen(true);
                }}
              >
                <span className="material-icons text-white">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div
          className={clsx(
            "fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-200",
            closing ? "opacity-0" : "opacity-100"
          )}
          onClick={closeMenu}
          aria-hidden={!open}
        >
          <div
            className={clsx(
              "absolute right-3 top-3 w-[min(92vw,420px)] rounded-2xl border border-white/10 bg-[rgba(5,9,21,0.9)] backdrop-blur-xl p-4 transition-all duration-200",
              closing ? "-translate-y-2 opacity-0" : "translate-y-0 opacity-100"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white/90">Menu</div>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <span className="material-icons text-white">close</span>
              </button>
            </div>

            <div className="mt-4 grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:border-accent/60 hover:bg-white/10 hover:text-white"
                  onClick={closeMenu}
                >
                  <span className="text-sm font-semibold">{item.label}</span>
                  <span className="material-icons text-accent">
                    arrow_forward
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-accent/20 to-accent-2/10 p-4">
              <div className="text-sm font-semibold text-white">
                Luxury group travel, without the chaos.
              </div>
              <Link
                href="/contact"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(45,125,255,0.25)] transition hover:brightness-110"
                onClick={closeMenu}
              >
                Get consultation
                <span className="material-icons text-white">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="md:hidden">
        <div className="fixed bottom-3 left-1/2 z-40 w-[calc(100vw-2rem)] -translate-x-1/2">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[rgba(5,9,21,0.7)] px-4 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-accent/50 hover:bg-[rgba(7,16,39,0.85)]"
          >
            <span className="material-icons text-accent">chat</span>
            Talk to a travel specialist
          </Link>
        </div>
      </div>
    </>
  );
}

