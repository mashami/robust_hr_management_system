import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Loader } from "../Loader";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap outline-none rounded-[32px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 outline-none",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 outline-none",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground outline-none",
        secondary:
          "bg-[#F9F9F9] text-secondary-foreground hover:bg-secondary/80 outline-none",
        ghost: " hover:bg-accent hover:text-accent-foreground outline-none",
        link: "text-primary underline-offset-4 hover:underline outline-none"
      },
      size: {
        default: "h-[35px] px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  text?: string;
  loading?: boolean;
  svg?: React.ReactNode;
  position?: "right" | "left";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      text,
      svg,
      loading = false,
      asChild = false,
      position = "right",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {loading ? (
          <Loader />
        ) : (
          <span
            className={cn(
              svg ? "flex items-center space-x-1" : "",
              position === "left" && "flex flex-row-reverse gap-2"
            )}
          >
            <p
              className={cn(
                "text-[14px] font-medium leading-5",
                !svg && "px-2 "
              )}
            >
              {text}
            </p>
            {svg && <span>{svg}</span>}
          </span>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
