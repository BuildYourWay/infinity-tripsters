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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
    setClosing(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = React.useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 220);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 max-w-[100vw]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mt-3 rounded-2xl border border-white/10 bg-[rgba(5,9,21,0.55)] backdrop-blur-xl">
            <div className="flex min-w-0 items-center justify-between gap-3 px-4 py-3 sm:px-6">
              <BrandLogo iconSize={36} priority />

              {/* Desktop — unchanged at lg (1024px+) */}
              <nav className="hidden items-center gap-6 lg:flex">
                {navItems.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
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
                  className="ml-2 inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(45,125,255,0.25)] transition hover:brightness-110"
                >
                  Book a consult
                  <span className="material-icons text-white">arrow_forward</span>
                </Link>
              </nav>

              {/* Tablet + mobile controls — below lg */}
              <div className="flex shrink-0 items-center gap-2 lg:hidden">
                <Link
                  href="/contact"
                  className="hidden min-h-[40px] items-center gap-1.5 rounded-full bg-accent px-3 py-2 text-xs font-semibold text-white shadow-[0_0_0_1px_rgba(45,125,255,0.25)] transition hover:brightness-110 md:inline-flex"
                >
                  Book a consult
                  <span className="material-icons text-[16px] text-white">
                    arrow_forward
                  </span>
                </Link>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                  onClick={() => {
                    if (open) {
                      closeMenu();
                      return;
                    }
                    setClosing(false);
                    setOpen(true);
                  }}
                >
                  <span className="material-icons text-white">
                    {open ? "close" : "menu"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-over drawer — tablet + mobile only */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          className={clsx(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200",
            open && !closing ? "opacity-100" : "opacity-0"
          )}
          onClick={closeMenu}
        />
        <aside
          aria-hidden={!open}
          inert={!open ? true : undefined}
          className={clsx(
            "absolute inset-y-0 right-0 flex w-[min(100vw,380px)] max-w-full flex-col border-l border-white/10 bg-[rgba(5,9,21,0.96)] p-5 backdrop-blur-xl transition-transform duration-200 ease-out",
            open && !closing ? "translate-x-0" : "translate-x-full"
          )}
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

          <nav className="mt-6 grid gap-2">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "flex items-center justify-between rounded-xl border px-4 py-3 transition",
                    active
                      ? "border-accent/50 bg-accent/10 text-white"
                      : "border-white/10 bg-white/5 text-white/80 hover:border-accent/60 hover:bg-white/10 hover:text-white"
                  )}
                  onClick={closeMenu}
                >
                  <span className="text-sm font-semibold">{item.label}</span>
                  <span className="material-icons text-accent">arrow_forward</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-2xl border border-white/10 bg-gradient-to-br from-accent/20 to-accent-2/10 p-4">
            <div className="text-sm font-semibold text-white">
              Luxury group travel, without the chaos.
            </div>
            <Link
              href="/contact"
              className="mt-3 inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(45,125,255,0.25)] transition hover:brightness-110"
              onClick={closeMenu}
            >
              Talk to a travel specialist
              <span className="material-icons text-white">arrow_forward</span>
            </Link>
          </div>
        </aside>
      </div>

      {/* Sticky specialist CTA — tablet + mobile */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 lg:hidden">
        <div className="pointer-events-auto border-t border-white/10 bg-[rgba(5,9,21,0.92)] px-4 pt-3 backdrop-blur-xl pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="mx-auto w-full max-w-lg md:flex md:justify-center">
            <Link
              href="/contact"
              className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[rgba(5,9,21,0.7)] px-4 py-3 text-sm font-semibold text-white transition hover:border-accent/50 hover:bg-[rgba(7,16,39,0.85)] md:max-w-md"
            >
              <span className="material-icons text-accent">chat</span>
              Talk to a travel specialist
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
