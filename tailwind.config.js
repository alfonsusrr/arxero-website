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
        'main-bg-lumin': '#ECF4FF',
        'main-bg-arxero': '#DFE7F2',
        'dark-blue-2': '#090C2F',
        'dark-blue-2-stroke': "#20214A",
        "lumin-grad-start": '#452AF0',
        "lumin-grad-mid": '#318BEB',
        "lumin-grad-end": '#03C0E7',
        "grad-1-start": "#CDC5FF",
        "grad-1-mid": '#ADA5E4',
        "grad-1-end": '#57519B',
        "grad-2-start": "#6889FF",
        "grad-2-end": '#1D0B53',
        "grad-3-start": "#0C136C",
        "grad-3-end": '#02062C',
        "grad-4-start": "#B1CEF1",
        "grad-4-mid": '#596FE4',
        "grad-4-end": '#293BDD',
        "pastel-blue": '#F0F4FF',
        "input-border-light": "#D9D9D9",
        "input-fill-light": "#F6F9FF",
        "arxero-text-active": "#9D31D7",
        "arxero-text-hover": "#010174",
        "arxero-text-gray": "#525252",
        "arxero-text-light-gray": "#DAD7F4",
      },
      height: {
        'header': "7rem"
      },
      backgroundImage: {
        "vision-bg": "url('/public/lumin_vision_bg.jpg')",
        "action-bg": "url('/public/lumin_action_bg.jpg')",
        'glowing-radial-box': 'radial-gradient(ellipse at 50% 180%, var(--tw-gradient-stops))',
        'glowing-radial-box-raised': 'radial-gradient(ellipse at 50% 150%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
      },
      keyframes: {
        highlight: {
          '0%': { backgroundSize: '0% 50%' },
          '100%': { backgroundSize: '70% 50%' },
        },
      },
      animation: {
        highlight: 'highlight 3s ease infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

