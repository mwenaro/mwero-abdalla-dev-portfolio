// components/NavLink.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        isActive ? "text-white" : "text-[#a1abb5] hover:text-white"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-6 bg-[#327fcc] rounded-full" />
      )}
    </Link>
  );
}
