/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-1": "url('../public/background.png')",
        "background-2": "url('../public/background-phone.png')",
      },
      backgroundColor: {
        header: "#161821",
      },
      height: {
        "header-footer": "8vh",
        "small-footer": "22vh",
        content: "84vh",
        "small-content": "70vh",
        "small-footer-ol": "120px",
        logo: "50px",
        img: "90%",
      },
      width: {
        logo: "50px",
        img: "100%",
        "small-footer-ol": "300px",
      },
      fontSize: {
        "size-footer": "11px",
      },
      textColor: {
        "color-footer": "#F4F4F4",
      },
    },
  },
  plugins: [],
};
