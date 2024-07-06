/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-dark-blue': "#000026",
        'main-bg-grey': "#E9ECF1",
        'main-bg-lumin': '#FAFAFF',
        "lumin-grad-start": '#452AF0',
        "lumin-grad-mid": '#318BEB',
        "lumin-grad-end": '#03C0E7',
      },
      height: {
        'header': "7rem"
      },
      backgroundImage: {
        "vision-bg": "url('/public/lumin_vision_bg.jpg')"
      }
    },
  },
  plugins: [],
}

