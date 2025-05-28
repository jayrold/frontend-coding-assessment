import { ReactElement } from "react";
import CardButton from "./card-button";
import Image from "next/image";

export default function HeroCard(): ReactElement {
  return (
    <div className="max-w-[33rem] mr-28 flex flex-col gap-4 relative z-[1]">
      <div className="bg-white rounded-3xl shadow-lg p-14 pb-10 flex flex-col gap-6">
          <h1 className="text-xl text-center font-[700]">Remarkable new journeys one every flight</h1>
          <CardButton />
          <p className="text-sm text-center">No delay in your current progress</p>
      </div>
      <div className="flex justify-center items-center bg-white rounded-full shadow-lg py-2 shadow-lg">
          <Image src="/press.png" width={352} height={33} alt="Rating" />
      </div>
    </div>
  );
}