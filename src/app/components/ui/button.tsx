"use client";

import { cn } from "@/lib/utils";
import { ReactElement, ReactNode, ButtonHTMLAttributes } from "react";

export default function Button({ 
  children, 
  className, 
  ...props 
}: ButtonHTMLAttributes<HTMLButtonElement> & { 
  children: ReactNode 
}): ReactElement {
  return (
    <button 
      type="button" 
      className={cn("bg-bright-orange text-white h-12 md:h-[3.875rem] px-8 py-2 md:py-4 rounded-full shadow-[0_8px_20px_0_rgba(255,165,0,0.5)] hover:shadow-[0_12px_28px_0_rgba(255,165,0,0.6)] transition-shadow", className)} 
      {...props}
    >
      {children}
    </button>
  )
}
