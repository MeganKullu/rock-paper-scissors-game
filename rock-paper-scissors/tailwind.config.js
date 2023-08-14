/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "dark-text": "#3B4363",
        "score-text": "#2A46C0",
        "header-outline": "#606E85",
        "scissors": "#EC9E0E",
        "paper": "#4865F4",
        "rock": "#DC2E4E",
        "cyan": "#40B9CE",
        "radial": "#1F3756",
        "radial-gradient": "#141539",
      },
      fontFamily: {
        'Barlow Semi Condensed':["Barlow Semi Condensed","sans-serif"],
      },
    },
    plugins: [],
  }
}
