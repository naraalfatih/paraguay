import Link from "next/link";
import { mainNav } from "@/data/site";
import { Ornament } from "@/components/ui/Ornament";
import { HeaderFrame } from "./HeaderFrame";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

export function SiteHeader() {
  return (
    <HeaderFrame>
      <div className="mx-auto flex h-full max-w-wide items-center justify-between gap-6 px-gutter">
        <Link href="/" className="group inline-flex h-11 items-center gap-3" aria-label="Paraguay — home">
          <Ornament className="size-7 text-accent transition-transform duration-700 group-hover:rotate-45" />
          <span className="font-serif text-[1.35rem] tracking-tight">Paraguay</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <NavLinks items={mainNav} />
        </nav>

        <MobileNav items={mainNav} />
      </div>
    </HeaderFrame>
  );
}
