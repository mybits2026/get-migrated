"use client"

import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        data-slot="select"
        className={cn(
          "flex h-12 w-full appearance-none rounded-[var(--radius-sm)] border border-border bg-white px-4 py-3 pr-11 text-base text-foreground shadow-[0_1px_2px_rgba(15,39,71,0.04)] outline-none transition-[border-color,box-shadow,background-color] focus:border-ring focus:ring-3 focus:ring-ring/50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDownIcon
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-[var(--color-eucalyptus)]"
      />
    </div>
  )
}

export { Select }
