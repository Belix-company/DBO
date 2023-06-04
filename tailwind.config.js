/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    fontSize: {
      '14': ['14px', {
        fontWeight: '400',
      }]
    },
    fontFamily: {
      roboto: ['roboto'],
      dewi: ["dewi"],
    },
    extand: {
      spacing: {
        '16': '16px',
        '22': '22px',
        '24': '24px',
        '5': '5px',
        '11': '11px',
        '19': '19px'
      },

    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

  },
  plugins: [],
}

