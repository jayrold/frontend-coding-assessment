import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Container({ children, className }: { children: ReactNode, className?: string }): ReactNode {
  return (
    <div className={cn("mx-auto max-w-89 px-4", className)}>{children}</div>
  )
}