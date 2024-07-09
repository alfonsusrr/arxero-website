/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-dark-blue': "#000026",
        'sec-dark-blue': "#23235B",
        'main-bg-grey': "#E9ECF1",
        'main-bg-lumin': '#F9F9FF',
        "lumin-grad-start": '#452AF0',
        "lumin-grad-mid": '#318BEB',
        "lumin-grad-end": '#03C0E7',
        "pastel-blue": '#F0F4FF',
        "input-border-light": "#D9D9D9",
        "input-fill-light": "#F6F9FF"
      },
      height: {
        'header': "7rem"
      },
      backgroundImage: {
        "vision-bg": "url('/public/lumin_vision_bg.jpg')",
        "action-bg": "url('/public/lumin_action_bg.jpg')"
      }
    },
  },
  plugins: [],
}

