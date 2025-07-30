// components/NavLink.tsx
"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { usePageTransition } from "@/hooks/usePageTransition";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { navigateWithLoading } = usePageTransition();

  const handleClick = (e: React.MouseEvent) => {
    if (href !== pathname) {
      e.preventDefault();
      navigateWithLoading(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        isActive ? "text-portfolio-text-primary" : "text-portfolio-text-secondary hover:text-portfolio-text-primary"
      }`}
    >
      <motion.span
        className="relative z-10"
        whileHover={{ y: -1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.span>
      
      {/* Active indicator */}
      {isActive && (
        <motion.span 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-6 bg-portfolio-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 24 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Hover background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-md opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Hover underline */}
      {!isActive && (
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-400 rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: "60%" }}
          transition={{ duration: 0.2 }}
        />
      )}
    </button>
  );
}
