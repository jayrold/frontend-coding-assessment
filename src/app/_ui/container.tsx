import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Container({ children, className }: { children: ReactNode, className?: string }): ReactNode {
  return (
    <div className={cn("container mx-auto max-w-90", className)}>{children}</div>
  )
}