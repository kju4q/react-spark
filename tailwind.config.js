/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Include all your JS, JSX, TS, and TSX files
    "./src/**/*.{scss}",
    "../react-spark-ui/dist/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// content: [
//   './src/**/*.{html,js,ts,jsx,tsx}', // Your app's components
//   '../react-spark-ui/dist/**/*.{html,js,ts,jsx,tsx}',  // Include components from the UI library
// ],
