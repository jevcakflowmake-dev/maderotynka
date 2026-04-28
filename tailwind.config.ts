import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6F0',
        sand: '#EFE4D6',
        blush: '#E8C5BD',
        'blush-soft': '#F2D9D2',
        'blush-deep': '#D4A5A0',
        gold: '#C9A87C',
        'gold-soft': '#E2C9A1',
        mocha: '#3D2A1E',
        'mocha-soft': '#5A4233',
        muted: '#A8927C',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Outfit', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widestest: '0.28em',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(61, 42, 30, 0.18)',
        'soft-blush': '0 20px 50px -20px rgba(212, 165, 160, 0.45)',
      },
    },
  },
  plugins: [],
}
export default config
