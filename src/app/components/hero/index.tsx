import { ReactElement } from "react";
import Container from "../ui/container";
import Background from "./background";
import Button from "../ui/button";
import Image from "next/image";
export default function Hero(): ReactElement {
    return (
        <section className="h-screen bg-yellow text-blue">
            <Background />
            <Container className="relative z-10 pt-40 w-full flex justify-end">
                <div className="max-w-[33rem] mr-32 flex flex-col gap-4">
                    <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col gap-6">
                        <h1 className="text-xl text-center font-[700]">Remarkable new journeys one every flight</h1>
                        <Button className="text-lg justify-center flex gap-4 items-center w-full">Visit Now <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0033 -1.52087e-06L9.97814 1.6518L14.5347 5.33003L1.60868e-05 5.33003L1.5836e-05 7.64595L14.5347 7.64595L9.97814 11.3242L12.0033 12.976L20.0407 6.48799L12.0033 -1.52087e-06Z" fill="currentColor"/>
                        </svg>
                        </Button>
                        <p className="text-sm text-center">No delay in your current progress</p>
                    </div>
                    <div className="flex justify-center items-center bg-white rounded-full shadow-lg py-2 shadow-lg">
                        <Image src="/press.png" width={352} height={33} alt="Rating" />
                    </div>
                </div>
            </Container>
        </section>
    )
}