"use client"
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Moon, Sun, Monitor } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  const themes = [
    { name: 'light', icon: Sun, label: 'Light' },
    { name: 'dark', icon: Moon, label: 'Dark' },
    { name: 'system', icon: Monitor, label: 'System' }
  ];

  const currentThemeIndex = themes.findIndex(t => t.name === theme);
  const nextTheme = themes[(currentThemeIndex + 1) % themes.length];

  const handleThemeChange = () => {
    setTheme(nextTheme.name);
  };

  const CurrentIcon = themes.find(t => t.name === theme)?.icon || Sun;
  const isLight = resolvedTheme === 'light';

  return (
    <motion.button
      onClick={handleThemeChange}
      className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${nextTheme.label} theme`}
      title={`Current: ${theme} | Click for: ${nextTheme.label}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-5 h-5"
      >
        <CurrentIcon 
          className={`w-5 h-5 transition-colors ${
            isLight 
              ? 'text-yellow-600' 
              : 'text-blue-400'
          }`} 
        />
      </motion.div>
      
      {/* Theme indicator dots */}
      <div className="absolute -bottom-1 -right-1 flex space-x-1">
        {themes.map((t) => (
          <div
            key={t.name}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              t.name === theme
                ? 'bg-blue-500'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </motion.button>
  );
}
