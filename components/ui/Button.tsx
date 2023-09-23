import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const buttonVariants = cva(
  "flex items-center justify-center text-sm font-semibold",
  {
    variants: {
      variant: {
        default: "bg-primary rounded-tl-full rounded-br-full text-white ",
        secondary: "bg-Mainw rounded-tl-full rounded-br-full text-primary",
        link: "text-Mainw hover:bg-Mainw text-xl font-semibold hover:text-secondary transition-colors duration-300 ease-in-out rounded-lg",
      },
      size: {
        sm: "h-9 px-4 ",
        md: "h-10 px-[1.625rem]",
        lg: "h-9 px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
