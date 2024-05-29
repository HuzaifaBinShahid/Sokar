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
        border: "#FFFFFF80",
        head: "#FFFFFF99",
        text: "#FFFFFFB2",
        fade: "rgba(255, 255, 255, 0.9)",
      },
      keyframes: {
        glow: {
          '0%, 100%': { color: '#66E4FE', },
          '50%': { color: 'white', },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        glow: 'glow 1.5s infinite',
        slideDown: 'slideDown 1s ease-out forwards',
      },
    
      screens: {
        'xs': '310px',  
      },
      
    },
  },
  plugins: [],
};
export default config;
