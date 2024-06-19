// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "first-page-bg": "url('images/DJEDEL-20230401-TULUM-00156.jpg')",
        "songs-page-bg": "url('images/DJEDEL-20230401-TULUM-00073.jpg')",
      },
      colors: {
        "primary-red": "#cb4949",
        "about-background-color": "#e3e3e3",
      },
    },
  },
  plugins: [],
};
