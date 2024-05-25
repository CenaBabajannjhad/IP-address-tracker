/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mobile' : "url('./assets/png/pattern-bg-mobile.png')",
        'desktop' : "url('./assets/png/pattern-bg-desktop.png')"
      }),
    },
    screens: {
      'sm' : '375px',
      'lg' : '1440px'
    },
  },
  plugins: [],
}


