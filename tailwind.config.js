/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#6B7280",
        accent: "#10B981",
        background: "#F3F4F6",
        text: "#1F2937",
      },
    },
  },
  plugins: [],
};
