module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
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

      '3xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        warmgray: {
           50:'#FAFAF9',
          100:'#F5F5F5',
          200: '#E5E5E5',
          300:'#D4D4D4',
          400:'#A3A3A3',
          500:'#737373',
          600:'#525252',
          700:'#404040',
          800: '#262626',
          900: '#1C1917'
        }
        },
    },
    fontFamily:{
      sans:[ 'Red Hat Display', 'sans-serif'],
      serif:[ 'DM Serif Display', 'serif'],
      mono:['Noto Sans', 'serif']
    },
    letterSpacing: {
      wide: '0.025em',
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  purge: ["./src/**/*.js", "./src/**/*.njk", "./src/**/*.svg"],
};
