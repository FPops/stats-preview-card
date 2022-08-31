/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      'mback':'hsl(233, 47%, 7%)',
      'cback':'hsl(244, 38%, 16%)',
      'sviolet':'hsl(277, 64%, 61%)',
      'headwh' : 'hsl(0,0%,100%)',
      'para':'hsla(0, 0%, 100%, 0.75)',
      'headings' : 'hsla(0, 0%, 100%, 0.6)',
    },
  },
  plugins: [],
}


// - Very dark blue (main background): hsl(233, 47%, 7%)
// - Dark desaturated blue (card background): hsl(244, 38%, 16%)
// - Soft violet (accent): hsl(277, 64%, 61%)

// ### Neutral

// - White (main heading, stats): hsl(0, 0%, 100%)
// - Slightly transparent white (main paragraph): hsla(0, 0%, 100%, 0.75)
// - Slightly transparent white (stat headings): hsla(0, 0%, 100%, 0.6)