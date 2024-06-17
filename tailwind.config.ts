import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#6F2B8D",
        tertiary: "#FBF1FF",
        backgrounds: "#F1F4F9",
        "text-primary": "#202224",
        "text-secondary": "#1E1E1E",
        "text-tertiary": "#1B1B1B",
        70: "#707070",
        d8: "#D8D8D8",
        e1: "#e1e1e1",
        e3: "#E3E3E3",
        f8f8f9: "#F8F8F9",
        brand: {
          text: "#6B7280",
          bgRed: "#D34053",
          textRed: "#FE5E5B",
          lightblue: "#EDF4FF",
          green: "#22C55E",
          greenBg: "#16A34A",
          yellow: "#D19634",
          lightyellow: "#FEF8EE",
        },
        purple: {
          thin: "#FBF1FF",
          extralight: "#F7F2FA",
          light: "#F5C2E9",
          normal: "#F090C2",
          medium: "#A2629B",
          bold: "#5F4671",
        },
      },
    },
  },
  plugins: [],
};
export default config;
