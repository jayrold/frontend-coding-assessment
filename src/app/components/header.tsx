"use client";

import { ReactElement, useState } from "react";
import Container from "./ui/container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  {
    label: "Help & Advice",
    href: "/help-advice",
  },
  {
    label: "Locations",
    href: "/locations",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  }
];

export default function Header(): ReactElement {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return path === pathname;
  }

  return (
    <header className="fixed left-0 top-12 md:top-10 z-50 w-full">
      <Container className=""> 
        <div className="flex justify-between items-center bg-white rounded-3xl shadow-lg h-[3.125rem] md:h-[3.75rem] px-4 md:px-10">
          {/* Hamburger Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-4 h-[0.875rem] flex flex-col justify-between">
              <span className={cn("w-full h-0.5 bg-blue transition-all", isMenuOpen && "rotate-45 translate-y-2")} />
              <span className={cn("w-full h-0.5 bg-blue transition-all", isMenuOpen && "opacity-0")} />
              <span className={cn("w-full h-0.5 bg-blue transition-all", isMenuOpen && "-rotate-45 -translate-y-2")} />
            </div>
          </button>

          {/* Logo - Centered on mobile */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Link href="/">
              <Image src="/logo-1.png" className="h-6 md:h-[1.875rem]" alt="Logo" width={100} height={100} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4">
            {navItems.map((item) => (
              <Link 
                className={cn("text-blue", isActive(item.href) && "text-yellow")} 
                href={item.href} 
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className={cn(
            "fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
            "md:hidden"
          )}>
            <button 
              className="absolute top-4 left-4 p-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="text-blue" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <Link 
                  className={cn("text-blue text-lg", isActive(item.href) && "text-yellow")} 
                  href={item.href} 
                  key={item.label}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Login Button - Always visible */}
          <div>
            <Link href="/" className="text-xs md:text-base flex items-center inline-block gap-1 md:gap-2 text-blue border border-blue rounded-full px-2 md:px-5 py-1 hover:bg-blue hover:text-white transition-colors">
              <svg className="w-2 h-2 md:w-3 md:h-3" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="3" r="3" fill="currentColor"/>
                <path d="M0 11C0 8.79086 1.79086 7 4 7C6.20914 7 8 8.79086 8 11V13H0V11Z" fill="currentColor"/>
              </svg>
              Login
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}