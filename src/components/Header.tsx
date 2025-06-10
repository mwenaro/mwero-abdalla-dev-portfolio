import { HomeIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-[#2b3036] px-10 py-3">
      <div className="flex items-center gap-4">
        <div className="size-4 text-white">
          <HomeIcon className="w-4 h-4" />
        </div>
        <h2 className="text-lg font-bold tracking-tight">Mwero Abdalla</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9 text-sm font-medium">
          <Link href="/about">About</Link>
          <Link href="/">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Button className="bg-[#327fcc] text-white">Resume</Button>
      </div>
    </header>
  );
}
