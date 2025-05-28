"use client";

import { ReactElement } from "react";
import Container from "../ui/container";
import Background from "./background";
import HeroCard from "./card";
import Image from "next/image";
import Cloud from "./cloud";

export default function Hero(): ReactElement {
    return (
        <section className="h-screen bg-yellow text-blue">
            <Background />
         
            <Container className="relative z-10 pt-40 w-full flex justify-end">
                <Image src="/recycle.png" width={573} height={573} alt="Recycle" className="absolute top-24 -left-12 z-0" />
                <HeroCard />   
                <Cloud />
            </Container>
        </section>
    )
}