import { ReactElement } from "react";
import Container from "./container";
import Background from "./background";

export default function Hero(): ReactElement {
    return (
        <section className="h-screen bg-yellow">
            <Background />
            <Container className="relative z-10">
                <h1>Hero</h1>
            </Container>
        </section>
    )
}