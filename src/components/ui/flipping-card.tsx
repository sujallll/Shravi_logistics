import React from "react";

import { cn } from "@/lib/utils";

interface FlippingCardProps {
  className?: string;
  height?: number;
  width?: number;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
}

export function FlippingCard({
  className,
  frontContent,
  backContent,
  height = 300,
  width = 350,
}: FlippingCardProps) {
  const isFullWidth = className?.includes("w-full");
  
  return (
    <div
      className={cn("group/flipping-card [perspective:1000px]", isFullWidth && "w-full")}
      style={
        {
          "--height": `${height}px`,
          "--width": `${width}px`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "relative rounded-xl border border-neutral-200 bg-white shadow-lg transition-transform duration-700 [transform-style:preserve-3d] group-hover/flipping-card:[transform:rotateY(180deg)] dark:border-neutral-800 dark:bg-neutral-950",
          className
        )}
        style={{
          height: `${height}px`,
          minHeight: `${height}px`,
          ...(isFullWidth ? { width: "100%" } : { width: `${width}px`, minWidth: `${width}px` }),
        }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-[inherit] [backface-visibility:hidden] [transform:rotateY(0deg)]">
          <div className="h-full w-full overflow-hidden rounded-[inherit]">
            {frontContent}
          </div>
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-[inherit] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="h-full w-full overflow-hidden rounded-[inherit]">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}

