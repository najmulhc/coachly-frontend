module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#397BDD",

          secondary: "#FD5894",

          accent: "#1D3066",

          neutral: "#051622",

          "base-100": "#fff",

          info: "#4AA8BF",

          success: "#03A55A",

          warning: "#F50346",

          error: "#EA4034",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
