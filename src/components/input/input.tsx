import { cn } from "@/utils/tailwind-merge-clsx";
import { forwardRef, InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      className={cn(
        "w-full rounded-[var(--space-200)] border border-gray-13 bg-plain-surface px-[var(--space-300)] py-[var(--space-150)] transition",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = "Input";
