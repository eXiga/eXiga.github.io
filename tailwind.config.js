module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ab97f4",
          secondary: "#dda782",
          accent: "#6838d1",
          neutral: "#251D25",
          "base-100": "#28385C",
          info: "#8797D9",
          success: "#41E1CF",
          warning: "#B59008",
          error: "#ED6E96",
        },
      },
    ],
  },
};
