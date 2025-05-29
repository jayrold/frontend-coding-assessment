import { ReactElement } from "react";
import Container from "../ui/container";

export default function Placeholder({ title }: { title: string }): ReactElement {
  return (
    <div className="h-screen w-full bg-yellow text-white flex items-center justify-center">
      <Container>
        <h1 className="text-2xl font-bold">{title}</h1>
      </Container>
    </div>
  )
}