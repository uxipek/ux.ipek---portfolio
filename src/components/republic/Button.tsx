import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Style = { variant?: "default" | "outline" | "ghost"; size?: "default" | "lg" };
const cls = ({ variant = "default", size = "default" }: Style, extra = "") =>
  `r-btn r-btn-${variant} ${size === "lg" ? "r-btn-lg" : ""} ${extra}`;

export function Button({ variant, size, className, type = "button", ...props }: Style & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type={type} className={cls({ variant, size }, className)} {...props} />;
}

export function ButtonLink({ variant, size, className, ...props }: Style & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={cls({ variant, size }, className)} {...props} />;
}
