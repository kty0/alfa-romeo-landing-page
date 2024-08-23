/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        header: "#161821",
      },
      height: {
        "header-footer": "8vh",
        "small-footer": "22vh",
        content: "84vh",
        "small-content": "70vh",
        logo: "50px",
        img: "90%",
      },
      width: {
        logo: "50px",
      },
      fontSize: {
        "size-footer": "11px",
      },
      textColor: {
        "white-1": "#F4F4F4",
      },
    },
  },
  plugins: [],
};
