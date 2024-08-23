/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        header: "#161821",
        forms: "rgba(91, 71, 71, 0.35)",
        choice: "#161821",
      },
      height: {
        "header-footer": "7vh",
        "small-footer": "18vh",
        content: "86vh",
        "small-content": "75vh",
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
      maxHeight: {
        "small-content": "73vh",
      },
    },
  },
  plugins: [],
};
