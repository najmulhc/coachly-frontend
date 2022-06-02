module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1181B2",

          secondary: "#44449B",

          accent: "#212221",

          neutral: "#051622",

          "base-100": "#DDEDF4",

          info: "#4AA8BF",

          success: "#81328F",

          warning: "#EF8234",

          error: "#EA4034",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
