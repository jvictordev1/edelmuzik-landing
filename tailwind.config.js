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
        "first-page-bg": "url('/fpbackground.png')",
        "songs-page-bg": "url('/songs-page-bg.png')",
        "contact-page-bg": "url('/cpbackground.png')",
        "about-page-bg": "url('/about-page-bg.png')",
        "edel-playing-about-bg": "url('/edel-playing-about-bg.jpg')",
      },
      colors: {
        "primary-red": "#cb4949",
        "about-background-color": "#e3e3e3",
      },
    },
  },
  plugins: [],
};
