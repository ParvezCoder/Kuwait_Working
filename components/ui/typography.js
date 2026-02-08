import { cn } from "../../lib/utils";

export function Typography({ variant = "p", className, children }) {
  const variants = {
    h1: "text-3xl font-bold text-center",
    h2: "text-2xl font-semibold",
    h3: "text-xl font-medium",
    p: "text-base",
    small: "text-sm text-gray-500",
  };

  const Component = variant;

  return <Component className={cn(variants[variant], className)}>{children}</Component>;
}
