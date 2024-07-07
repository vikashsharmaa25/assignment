import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
      colors: {
        black: "#263238",
        d_Grey: "#4d4d4d",
        grey: "#717171",
        l_grey: "#89939e",
        blue: "#abbed1",
        silver: "#f5f7fa",
        white: "#ffffff",

        primary: "#28cb8b",
        secondary: "#263238",
        info: "#2194f3",

        green1: "#43a046",
        green2: "#388e3b",
        green3: "#237d31",
        green4: "#1b5e1f",
        green5: "#103e13",

        tint1: "#66bb69",
        tint2: "#81c784",
        tint3: "#a5d6a7",
        tint4: "#c8e6c9",
        tint5: "#e8f5e9",

        warning: "#fbc02d",
        error: "#e53835",
        success: "#2e7d31",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
