"use client";
import { HomeIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

import { useEffect, useState } from "react";
import { NavLink } from "./NavLink";

export function Header() {
  
  // const [activePath, setActivePath] = useState("/");
  const [scrolled, setScrolled] = useState(false);

 
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#121417]/95 backdrop-blur-md py-2 border-b border-[#2b3036]/50"
          : "bg-[#121417] py-3 border-b border-[#2b3036]"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo/Home Link */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="size-8 flex items-center justify-center rounded-full bg-[#327fcc] group-hover:bg-[#3a8cd6] transition-colors">
              <HomeIcon className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-bold tracking-tight text-white hidden sm:block">
              Mwero Abdalla
            </h2>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink href={item.path} key={item.label}>{item.label}</NavLink>
              ))}
            </nav>

            {/* Mobile menu button (you'll need to implement the mobile menu) */}
            <Button className="md:hidden text-[#a1abb5] hover:text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>

            {/* Resume Button */}
            <Button
              className="bg-[#327fcc] hover:bg-[#3a8cd6] text-white ml-4"
              onClick={() => window.open("/Mwero_Abdalla_Resume.pdf", "_blank")}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
