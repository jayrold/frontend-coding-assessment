import { cn } from "@/lib/utils";
import { ReactElement, ReactNode } from "react";

export default function Button({ children, className, ...props }: { children: ReactNode, className?: string, props?: any }): ReactElement {
  return (
    <button type="button" className={cn("bg-bright-orange text-white h-[3.875rem] px-8 py-4 rounded-full shadow-[0_4px_14px_0_rgba(255,165,0,0.39)] hover:shadow-[0_6px_20px_0_rgba(255,165,0,0.23)] transition-shadow", className)} {...props}>
      {children}
    </button>
  )
}
