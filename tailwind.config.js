/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        harrypotter: {
          "primary": "#d4af37",  // Zlatá (Gryffindor)
          "secondary": "#1a472a", // Slytherin zelená
          "accent": "#740001",    // Gryffindor červená
          "neutral": "#5f3b1a",   // Hnědá / pergamenová
          "base-100": "#0e1a40",  // Noční modrá
          "info": "#4b88a2",      // Modrá (Ravenclaw vibes)
          "success": "#FFD700",   // Zářivě žlutá (Hufflepuff)
          "warning": "#eeba30",   // Zlatavě žlutá
          "error": "#7f0909",     // Krvavě červená
        },
      }
    ],
  },
};
