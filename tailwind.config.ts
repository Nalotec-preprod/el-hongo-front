import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "hongo-broom": {
          "50": "#fdffe7",
          "100": "#f8ffc1",
          "200": "#f5ff86",
          "300": "#f8ff41",
          "400": "#fffd0d",
          "500": "#fcec00",
          "600": "#d1b200",
          "700": "#a68002",
          "800": "#89640a",
          "900": "#74510f",
          "950": "#442c04",
        },
        "hongo-rustynail": {
          "50": "#fefce8",
          "100": "#fdf8c4",
          "200": "#fbee8d",
          "300": "#f9dd4b",
          "400": "#f5c91a",
          "500": "#e5b00d",
          "600": "#c68808",
          "700": "#965d0a",
          "800": "#824d11",
          "900": "#6f3f14",
          "950": "#412007",
        },
        "hongo-albescentwhite": {
          "50": "#fbf8f1",
          "100": "#f7efdd",
          "200": "#f1e3c8",
          "300": "#e2c38f",
          "400": "#d6a461",
          "500": "#cd8c42",
          "600": "#bf7737",
          "700": "#9e5e30",
          "800": "#7f4b2d",
          "900": "#673f27",
          "950": "#371f13",
        },
        "hongo-olivedrab": {
          "50": "#f5faeb",
          "100": "#e8f3d4",
          "200": "#d3e8ae",
          "300": "#b5d97d",
          "400": "#98c655",
          "500": "#7aab37",
          "600": "#5c8527",
          "700": "#486823",
          "800": "#3c5420",
          "900": "#34481f",
          "950": "#19270c",
        },
        champagne: {
          "50": "#fbf9f1",
          "100": "#f6f0de",
          "200": "#efe3c6",
          "300": "#e0c791",
          "400": "#d2a965",
          "500": "#c99246",
          "600": "#bb7d3b",
          "700": "#9b6333",
          "800": "#7d4f2f",
          "900": "#654229",
          "950": "#362114",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "open-menu": {
          "0%": {
            transform: "scaleY(0)",
          },
          "80%": {
            transform: "scaleY(1.2)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
      backgroundImage: {
        heroBg: "url('/images/hongo-borderless.svg')",
        heroBlackOverlay:
          "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%)",
        headerOverlay:
          "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)",
        menuBlackOverlay:
          "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.85) 100%)",
        whiteOverlay:
          "linear-gradient(to bottom, rgba(251,249,241,0.5) 0%, rgba(251,249,241,0.5) 100%)",
        whiteModalOverlay:
          "linear-gradient(to bottom, rgba(251,249,241,0.93) 0%, rgba(251,249,241,0.93) 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
