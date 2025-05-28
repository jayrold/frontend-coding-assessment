import { ReactElement } from "react";
import Image from "next/image";
import CardButton from "./card-button";

export default function Cloud(): ReactElement {
  return (
    <div className="absolute -bottom-[4.5rem] left-0 w-full h-[26.8125rem] z-[2]">
      <div className="w-full h-full relative flex justify-end">
        <Image src="/cloud.png" width={901} height={429} alt="Cloud" className="absolute top-0 left-0" />
        <div className="max-w-[33rem] w-full mr-32 flex justify-end" >
          <CardButton className="translate-y-[9.1rem]"/>
        </div>
      </div>
    </div>
  )
}
