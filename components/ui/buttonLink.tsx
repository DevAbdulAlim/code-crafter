import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes, FC, LinkHTMLAttributes } from "react";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events:none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        secondary: "bg-slate-200 hover:bg-slate-300",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
      },
      size: {
        default: "px-4 py-2",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonLinkProps
  extends VariantProps<typeof buttonVariants>,
    LinkProps {
  className?: string;
  children: React.ReactNode;
}

const ButtonLink: FC<ButtonLinkProps> = ({
  className,
  children,
  href,
  variant,
  size,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
