"use client";

import { ReactElement } from "react";
import Container from "./container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  {
    label: "Help & Advice",
    href: "/",
  },
  {
    label: "Locations",
    href: "/",
  },
  {
    label: "Contact Us",
    href: "/",
  }
];

export default function Header(): ReactElement {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return path === pathname;
  }

  return (
    <header>
      <Container className="flex justify-between items-center"> 
        <div>
          <Image src="/logo-1.png" alt="Logo" width={100} height={100} />
        </div>
        <nav>
          {navItems.map((item) => (
            <Link className={cn("text-blue", isActive(item.href) && "text-blue")} href={item.href} key={item.label}>{item.label}</Link>
          ))}
        </nav>
        <div>
          <button>
            <Image src="/images/search.svg" alt="Search" width={24} height={24} />
          </button>
        </div>
      </Container>
    </header>
  );
}