import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        background1: "#1B191D",
        offwhite: "#FAF9F6",
        purplebtn: "#7D27BF",
        backgroundDiv: "#330E4F",
        backgroundDiv2: "#111012",
        additionalGround: "#733A9F",
        foreground: "#2A262E",
        bigText: "#A239F2",
        pinkCode: "#fe1beb",
        lightPinkCode: "#ffb3f8",
        reactText: "#0066FF",
        tsText: "#4200FF",
        twText:"#64A2FF"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
    },
  },
  plugins: [
  ],
};
export default config;
