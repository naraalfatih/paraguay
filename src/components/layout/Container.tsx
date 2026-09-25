import { cn } from "@/lib/cn";

const sizes = {
  prose: "max-w-prose",
  content: "max-w-content",
  wide: "max-w-wide",
  full: "max-w-none",
} as const;

type ContainerProps = {
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

export function Container({ size = "content", className, children }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-gutter", sizes[size], className)}>{children}</div>;
}
