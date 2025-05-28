"use client";

import { ReactElement } from "react";
import Container from "../ui/container";
import Background from "./background";
import HeroCard from "./card";
import Image from "next/image";
import Cloud from "./cloud";

export default function Hero(): ReactElement {
    return (
        <section className="h-screen bg-yellow text-blue overflow-hidden">
            <Background />
            <Container className="relative z-10 pt-40 w-full flex justify-center custom:justify-end">
                <Image src="/recycle.png" width={573} height={573} alt="Recycle" className="translate-x-10 sm:translate-x-0 -translate-y-12 sm:translate-y-0 min-w-[180px] min-h-[180px] sm:min-w-[573px] sm:min-h-[573px] absolute top-3/4 custom:top-24 -left-12 z-0" />
                <HeroCard />   
                <Cloud />
            </Container>
        </section>
    )
}