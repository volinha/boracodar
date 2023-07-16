/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderWidth:{
        '1': '1px',
      },
      dropShadow:{
        '404': '0 0 196px rgba(112, 0, 255, 0.7)'
      },
      backgroundImage: () => ({
        'gradient-radial-to-tr': 'radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))',
        'gradient-radial-to-tl': 'radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))',
        'gradient-radial-to-br': 'radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))',
        'gradient-radial-to-bl': 'radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))',
      }),
      backgroundImage: {
        'rgb-gradient': 'linear-gradient(to right, rgb(255, 0, 0), rgb(0, 255, 0), rgb(0, 0, 255))'
      },
      colors: {
        'rs-gray': "#121214",
        'rs-purple-500': "#8257E5",
        'rs-purple-700': "#271A45",
        'white-10': 'rgba(255,255,255,0.1)',
        'white-20': 'rgba(255,255,255,0.2)',
        'white-60': 'rgba(255,255,255,0.6)',
        'white-80': 'rgba(255,255,255,0.8)',
        'white-100': 'rgba(255,255,255,1)',
        'black-10': 'rgba(0,0,0,0.1)',
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}