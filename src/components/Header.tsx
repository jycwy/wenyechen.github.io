"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight transition-colors hover:text-accent"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-2 md:flex">
          {siteConfig.nav.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "text-accent"
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-accent"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-foreground-muted hover:bg-background-secondary hover:text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border-subtle bg-background md:hidden">
          <ul className="mx-auto max-w-5xl px-6 py-4">
            {siteConfig.nav.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-accent-subtle text-accent"
                        : "text-foreground-muted hover:bg-background-secondary hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

