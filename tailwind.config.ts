import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        editorial: ["Bricolage Grotesque", "Space Grotesk", "sans-serif"],
        "serif-body": ["Space Grotesk", "sans-serif"],
        "sans-tight": ["Space Grotesk", "Inter Tight", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "section-warm": "hsl(var(--section-warm))",
        "section-sand": "hsl(var(--section-sand))",
        "section-cream": "hsl(var(--section-cream))",
        "section-peach": "hsl(var(--section-peach))",
        "section-lavender": "hsl(var(--section-lavender))",
        "section-dark": "hsl(var(--section-dark))",
        // retro palette exposed as utilities (bg-retro-*, text-retro-*, etc.)
        "retro-cream": "hsl(var(--retro-cream))",
        "retro-butter": "hsl(var(--retro-butter))",
        "retro-terracotta": "hsl(var(--retro-terracotta))",
        "retro-rust": "hsl(var(--retro-rust))",
        "retro-mustard": "hsl(var(--retro-mustard))",
        "retro-olive": "hsl(var(--retro-olive))",
        "retro-plum": "hsl(var(--retro-plum))",
        "retro-ink": "hsl(var(--retro-ink))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
