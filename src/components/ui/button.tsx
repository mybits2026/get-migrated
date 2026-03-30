"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:ring-4 focus-visible:ring-ring active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/15 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-action)] text-white shadow-[0_18px_30px_rgba(255,122,89,0.18)] hover:bg-[color:rgba(255,122,89,0.92)]",
        trust:
          "bg-primary text-primary-foreground shadow-[0_18px_36px_rgba(15,39,71,0.14)] hover:bg-[color:rgba(15,39,71,0.92)]",
        outline:
          "border-border bg-white text-primary hover:bg-secondary/65 aria-expanded:bg-secondary/65",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/85 aria-expanded:bg-secondary",
        route:
          "bg-accent text-accent-foreground shadow-[0_12px_24px_rgba(47,125,109,0.14)] hover:bg-[color:rgba(47,125,109,0.92)]",
        ghost:
          "text-primary hover:bg-secondary/60 hover:text-primary aria-expanded:bg-secondary/60",
        destructive:
          "bg-destructive text-white hover:bg-destructive/92 focus-visible:ring-destructive/15",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-11 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        xs: "h-8 px-3 text-xs",
        sm: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-11",
        "icon-xs": "size-8 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-10 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
