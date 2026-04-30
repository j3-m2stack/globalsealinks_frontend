import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-ring': {
          '0%': { 
            transform: 'scale(0.95)', 
            boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)' 
          },
          '70%': { 
            transform: 'scale(1)', 
            boxShadow: '0 0 0 12px rgba(37, 211, 102, 0)' 
          },
          '100%': { 
            transform: 'scale(0.95)', 
            boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)' 
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
