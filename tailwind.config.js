/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        brand: {
          50: "#eefbf7",
          100: "#d4f4ea",
          200: "#ace9d7",
          300: "#7fdabd",
          400: "#49c39d",
          500: "#22a884",
          600: "#17886b",
          700: "#146d58",
          800: "#145748",
          900: "#13483d"
        },
        accent: {
          100: "#fff0da",
          200: "#ffd69a",
          300: "#ffb954",
          400: "#f59d1f"
        }
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(34, 168, 132, 0.25)"
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at top left, rgba(255,255,255,0.14), transparent 28%), radial-gradient(circle at bottom right, rgba(34,168,132,0.18), transparent 32%)"
      }
    },
  },
  plugins: [],
};
