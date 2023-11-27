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
        "solgov-blue": {
          light: "#4C5B76",
          DEFAULT: "#3A3E64",
          dark: "#241F4A",
          darker: "#1D132C",
          darkest: "#0F0025",
        },
        "solgov-black": {
          light: "#37373E",
          DEFAULT: "#2D2D33",
          dark: "#202128",
        },
        "solgov-yellow": {
          light: "#F4F863",
          DEFAULT: "#FACB3E",
          dark: "#EE8E2E",
          darker: "#B65530",
        },
        "solgov-white": {
          light: "#EEEEEE",
          DEFAULT: "#CBCDD1",
          dark: "#A5A9B6",
          darker: "#747182",
        },
        "solgov-brown": {
          light: "#AB9A76",
          DEFAULT: "#8F795A",
          dark: "#806347",
          darker: "#614736",
        },
        "solgov-grey": {
          lighter: "#7B7F8A",
          light: "#5A606E",
          DEFAULT: "#474B57",
          dark: "#2E303B",
          darker: "#1F2026",
          darkest: "#14151A",
        },
        "solgov-background": {
          DEFAULT: "#424D5F",
          dark: "#303845",
        },
      },
    },
  },
  plugins: [],
};
export default config;
