import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0066CC',
          deep: '#00408A',
          night: '#0E1724',
          orange: '#FF7A00',
          ink: '#333333',
        },
        fog: { 100: '#F4F7FA', 200: '#E9EEF3' },
        line: '#DCE3EA',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'none' } },
        'dash': { to: { strokeDashoffset: '-160' } },
        'pulse-dot': { '0%,100%': { opacity: '.25' }, '50%': { opacity: '1' } },
      },
      animation: {
        'fade-up': 'fade-up .6s cubic-bezier(.22,.61,.36,1) both',
        'dash': 'dash 6s linear infinite',
        'pulse-dot': 'pulse-dot 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
