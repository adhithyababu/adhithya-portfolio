/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      colors: {
        bg: '#F8F7F4',
        bg2: '#FFFFFF',
        bg3: '#F1EFE8',
        border: '#D3D1C7',
        accent: '#185FA5',
        accent2: '#0C447C',
        ink: '#1a1917',
        muted: '#5F5E5A',
        subtle: '#888780',
      },
    },
  },
  plugins: [],
}
