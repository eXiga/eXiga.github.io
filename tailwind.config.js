module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        cupcake: {
          ...require("daisyui/src/colors/themes")["[data-theme=cupcake]"],
          secondary: "#EB5991",
        },
      },
    ],
  },
};
