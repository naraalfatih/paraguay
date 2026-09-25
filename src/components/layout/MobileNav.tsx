"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/data/site";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { Ornament } from "@/components/ui/Ornament";
import { isActive } from "./NavLinks";

export function MobileNav({ items }: { items: NavItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const show = () => {
    dialogRef.current?.showModal();
    setOpen(true);
  };
  const close = () => dialogRef.current?.close();

  // The menu is hidden at desktop widths; close it there so the page never stays inert behind it.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 64rem)");
    const onChange = () => mql.matches && dialogRef.current?.close();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={show}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="eyebrow inline-flex h-11 items-center gap-2 px-2 text-fg lg:hidden"
      >
        <MenuIcon />
        Menu
      </button>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        aria-label="Site menu"
        onClose={() => setOpen(false)}
        className="tone-night m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto p-0 backdrop:bg-night open:motion-safe:animate-fade lg:hidden"
      >
        <div className="flex min-h-full flex-col px-gutter pb-10">
          <div className="flex h-header items-center justify-between">
            <span className="font-serif text-xl">Paraguay</span>
            <button
              type="button"
              onClick={close}
              className="eyebrow inline-flex h-11 items-center gap-2 px-2"
            >
              <CloseIcon />
              Close
            </button>
          </div>

          <nav aria-label="Main" className="mt-8">
            <ul className="divide-y divide-line border-y border-line">
              {items.map((item, i) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      aria-label={item.label}
                      aria-describedby={`mnav-desc-${i}`}
                      className="group flex items-baseline gap-4 py-4"
                    >
                      <span aria-hidden="true" className="eyebrow w-6 text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block font-serif text-3xl group-aria-[current=page]:italic group-aria-[current=page]:text-accent">
                          {item.label}
                        </span>
                        <span id={`mnav-desc-${i}`} className="mt-1 block font-sans text-sm text-muted">
                          {item.description}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Ornament className="mt-auto size-16 self-end text-accent/40" />
        </div>
      </dialog>
    </>
  );
}
