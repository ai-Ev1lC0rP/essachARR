/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shr: {
          primary: '#49d232',    // Apple
          secondary: '#caff4d',  // Green Yellow
          accent1: '#2ad0d0',    // Turquoise
          accent2: '#ffd03a',    // Bright Sun
          accent3: '#feb526',    // My Sin
          // Shades of primary (Apple)
          50: '#a9e99e',
          100: '#8fe381',
          200: '#75dd64',
          300: '#5bd646',
          400: '#43cc2c',
          500: '#3aaf26',
          600: '#309220',
          700: '#267519',
          800: '#1d5713',
          900: '#133a0c',
        },
        'shr-lime': {
          700: '#267519',
          800: '#1d5713',
          // Add other shades if needed
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
