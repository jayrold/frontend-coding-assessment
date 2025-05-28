import { ReactElement } from "react";
import Image from "next/image";

export default function Background(): ReactElement {
    return (
      <div className="absolute left-0 top-0 h-[35.875rem] w-full bg-gradient-to-t from-[#AB6F02] to-transparent">
        <div className="w-full h-full relative">
          <div className="w-48 h-full z-[1] absolute left-0 top-0 bg-gradient-to-r from-[#AB6F02] to-transparent" />
          <div className="w-48 h-full z-[1] absolute right-0 top-0 bg-gradient-to-l from-[#AB6F02] to-transparent" />
          <Image src="/plain-1.png" width={120} height={126} alt="Plain" className="hidden md:block absolute top-40 right-0 z-0" />
          <Image src="/plain-2.png" width={203} height={129} alt="Plain" className="hidden md:block absolute bottom-24 right-0 z-0" />
          <Image src="/plain-3.png" width={160} height={126} alt="Plain" className="hidden md:block absolute bottom-24 left-0 z-0" />
        </div>
    </div>
    )
}