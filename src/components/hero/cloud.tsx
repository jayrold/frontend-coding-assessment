import { ReactElement } from "react";
import Image from "next/image";
import CardButton from "./card-button";

export default function Cloud(): ReactElement {
  return (
    <div className="absolute translate-y-[4.9rem] md:translate-y-0 -bottom-3/4 custom:-bottom-[4.5rem] left-0 w-full h-[26.8125rem] z-[0] custom:z-[2]">
      <div className="w-full h-full relative custom:flex justify-end">
        <Image 
          src="/cloud.png" 
          width={901} 
          height={429} 
          alt="Cloud" 
          className="absolute top-0 left-0 min-w-[550px] min-h-[260px] sm:min-w-[901px] sm:min-h-[429px]" 
        />
        <div className="max-w-[33rem] w-full mr-32 hidden custom:flex justify-end" >
          <CardButton className="translate-y-[9.1rem]"/>
        </div>
      </div>
    </div>
  )
}
