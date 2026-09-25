import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "./icons";

const variants = {
  primary: "bg-accent text-surface hover:bg-fg",
  secondary: "border border-fg/35 text-fg hover:border-fg hover:bg-fg hover:text-surface",
  text: "text-fg px-0! h-auto! gap-3 underline decoration-accent/60 underline-offset-[0.4em] hover:decoration-accent",
} as const;

const sizes = {
  md: "h-12 px-6",
  lg: "h-14 px-8",
} as const;

export type ButtonVariant = keyof typeof variants;

export function buttonStyles(variant: ButtonVariant = "primary", size: keyof typeof sizes = "md") {
  return cn(
    "group eyebrow inline-flex items-center justify-center gap-3 transition-colors duration-300",
    sizes[size],
    variants[variant],
  );
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", size = "md", arrow = true, className }: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(buttonStyles(variant, size), className)}>
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: keyof typeof sizes;
};

export function Button({ variant = "secondary", size = "md", className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonStyles(variant, size), className)} {...props} />;
}
