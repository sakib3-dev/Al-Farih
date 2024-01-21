/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "920px",
      // => @media (min-width: 1024px) { ... }

      xl: "1024px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1140px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        'HeaderShadow': '0 0 16px rgba(0, 0, 0, 0.40)',
        'DropDownShadow': '0px 8px 16px 0px rgba(0,0,0,0.2)',
        'iconShadow': '0px 10px 20px rgba(0,0,0,0.3)',
      },
      colors: {
        'TopNavBG': '#1e1e27',
        'primary': '#fe4c50',
        'brandOne': '#b5aec4',
        'brandTwo': '#232530',
        'breadCrumbs': '#b9b4c7',
        'footerText': '#51545f',
        'borderOne': '#ebebeb',
        'CountDown': '#f2f2f2',
        'benefitBG': '#f3f3f3',
        'instagram': '#d9317a',
      },
      
    },
  },
  plugins: [],
}
