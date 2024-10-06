/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: '#0B132B', // Deep night blue
          darker: '#04080F',  // Almost black
          light: '#1C2541',   // Slightly lighter night blue
        },
        windowLight: {
          DEFAULT: '#FFD700', // Warm window light color (soft yellow)
          dim: '#FFC300',     // Slightly dimmer yellow
          bright: '#FFEF82',  // Brighter yellow for contrast
        }
      }
    },
  },
  plugins: [],
};

