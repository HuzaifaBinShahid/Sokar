import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        colortag: "#66E4FE",
        paragraph: "#FFFFFF99",
        footer:"#FFFFFF1A",
        blogcard: "#FFFFFF1A",
        button: "#0C3942",
        border: "#FFFFFF80"
      },
      screens: {
        'xs': '310px',  
      },
      
    },
  },
  plugins: [],
};
export default config;
