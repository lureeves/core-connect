/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          white: "#fff",
          black: "#000",
          gray: "#1b2033",
          ghostwhite: "#f3f5fe",
          darkslateblue: "#2c4193",
          indigo: "#3a2a9b",
        },
        spacing: {},
        fontFamily: {
          "open-sans": "'Open Sans'",
        },
      },
      fontSize: {
        smi: "13px",
        base: "16px",
        "4xl": "23px",
        xs: "12px",
        sm: "14px",
        mid: "17px",
        lg: "18px",
        xl: "20px",
        "11xl": "30px",
        inherit: "inherit",
      },
    },
  };
  