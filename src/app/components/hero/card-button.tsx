import { ReactElement } from "react";
import Button from "../ui/button";
import { cn } from "@/lib/utils";

export default function CardButton( {className}: {className?: string} ): ReactElement {
    return (
      <Button 
      onClick={() => console.log("Harold Jayson Caminero")}
      className={cn("text-lg justify-center flex gap-4 items-center w-full max-w-[23.8125rem] mx-auto", className)}
  >
      Visit Now <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.0033 -1.52087e-06L9.97814 1.6518L14.5347 5.33003L1.60868e-05 5.33003L1.5836e-05 7.64595L14.5347 7.64595L9.97814 11.3242L12.0033 12.976L20.0407 6.48799L12.0033 -1.52087e-06Z" fill="currentColor"/>
  </svg>
  </Button>
    )
} 