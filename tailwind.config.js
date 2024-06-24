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
        eckmann: ["Eckmann", "sans-serif"],
      },
      backgroundImage: {
        "first-page-bg": "url('images/fpbackground.png')",
        "songs-page-bg": "url('images/songs-page-bg.png')",
        "contact-page-bg": "url('images/cpbackground.png')",
        "about-page-bg": "url('images/about-page-bg.png')",
        "edel-playing-about-bg": "url('images/edel-playing-about-bg.jpg')",
      },
      colors: {
        "primary-red": "#cb4949",
        "about-background-color": "#e3e3e3",
      },
    },
  },
  plugins: [],
};
