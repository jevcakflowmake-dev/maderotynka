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
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        'hero-subtitle': 'hsl(var(--hero-subtitle))',

        /* Direct beauty palette for explicit use */
        cream: '#FAF6F0',
        sand: '#EFE4D6',
        blush: {
          DEFAULT: '#E8C5BD',
          soft: '#F2D9D2',
          deep: '#D4A5A0',
        },
        gold: {
          DEFAULT: '#C9A87C',
          soft: '#E2C9A1',
        },
        mocha: {
          DEFAULT: '#3D2A1E',
          soft: '#5A4233',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Instrument Serif', 'Georgia', 'serif'],
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
