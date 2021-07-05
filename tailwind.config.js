module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
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
      serif:[ 'DM Serif Display', 'serif']
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
