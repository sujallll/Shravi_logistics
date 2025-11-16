"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = (
  | (ComponentPropsWithoutRef<"a"> & { as?: "a" })
  | (ComponentPropsWithoutRef<"button"> & { as: "button" })
) & {
  variant?: "solid" | "ghost" | "outline";
  icon?: React.ReactNode;
  motionProps?: Parameters<typeof motion.div>[0];
  href?: string;
};

export function Button({
  className,
  children,
  href = "#",
  variant = "solid",
  icon,
  motionProps,
  as,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold transition-all",
    variant === "solid" &&
      "bg-primary text-white shadow-[0_16px_32px_rgba(220,38,38,0.35)] hover:bg-primary-dark hover:shadow-[0_20px_36px_rgba(220,38,38,0.45)] dark:bg-primary dark:hover:bg-primary-light",
    variant === "ghost" &&
      "bg-white/10 text-white hover:bg-white/20 border border-white/30 shadow-inner dark:bg-white/5 dark:hover:bg-white/10",
    variant === "outline" &&
      "border border-accent text-accent hover:border-primary hover:text-primary hover:bg-accent/10 dark:border-accent-light dark:text-accent-light dark:hover:border-accent dark:hover:text-accent",
    className
  );

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (as === "button" || "type" in props) {
    return (
      <motion.div
        whileHover={{ y: -2, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        {...motionProps}
      >
        <button className={baseClasses} {...(props as ComponentPropsWithoutRef<"button">)}>
          {content}
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      {...motionProps}
    >
      <Link href={href} className={baseClasses} {...(props as ComponentPropsWithoutRef<"a">)}>
        {content}
      </Link>
    </motion.div>
  );
}

