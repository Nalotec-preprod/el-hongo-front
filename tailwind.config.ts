import type { Config } from "tailwindcss"

export default {
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
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
      backgroundImage: {
        heroBg: "url('/images/restaurant02.jpg')",
        heroBlackOverlay:
          "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%)",
        menuBlackOverlay:
          "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config
