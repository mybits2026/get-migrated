"use client"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-colors",
  {
    variants: {
      variant: {
        default: "border-primary/12 bg-primary/5 text-primary",
        route: "border-accent/12 bg-accent/10 text-accent",
        action:
          "border-[color:rgba(255,122,89,0.16)] bg-[color:rgba(255,122,89,0.12)] text-[var(--color-action)]",
        warm: "border-secondary bg-secondary text-primary",
        neutral: "border-border bg-white/80 text-foreground",
        success: "border-accent/12 bg-accent/10 text-accent",
        warning:
          "border-[color:rgba(217,138,43,0.18)] bg-[color:rgba(217,138,43,0.12)] text-[var(--color-warning)]",
        error: "border-destructive/14 bg-destructive/10 text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
