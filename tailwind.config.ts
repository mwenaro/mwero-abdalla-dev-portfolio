import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Use CSS variables for theme-aware colors
        'portfolio-bg-primary': 'var(--portfolio-bg-primary)',
        'portfolio-bg-secondary': 'var(--portfolio-bg-secondary)',
        'portfolio-text-primary': 'var(--portfolio-text-primary)',
        'portfolio-text-secondary': 'var(--portfolio-text-secondary)',
        'portfolio-text-muted': 'var(--portfolio-text-muted)',
        'portfolio-border': 'var(--portfolio-border)',
        'portfolio-accent': 'var(--portfolio-accent)',
        'portfolio-accent-hover': 'var(--portfolio-accent-hover)',
        'portfolio-success': 'var(--portfolio-success)',
        'portfolio-warning': 'var(--portfolio-warning)',
        'portfolio-error': 'var(--portfolio-error)',
      },
      backgroundImage: {
        'portfolio-gradient-primary': 'var(--portfolio-gradient-primary)',
        'portfolio-gradient-card': 'var(--portfolio-gradient-card)',
        'portfolio-gradient-accent': 'var(--portfolio-gradient-accent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
