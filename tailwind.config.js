/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: {
          mainGreen: "#06b97d",
          lightGray: "#f2f2f2",
          lightBlueishGray: "#bfcde1",
          blueishGray: "#94a3b8",
          midGray: "#aad",
          darkGray: "#2C3E50",
        }
      }
    },
  },
  plugins: [],
}

