/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#07090b',
          900: '#0c0f12',
          850: '#11151a',
          800: '#161b21',
          700: '#222933',
          600: '#2f3844',
        },
        brass: {
          light: '#e0c57d',
          DEFAULT: '#c7a254',
          dark: '#9e7b2e',
          deep: '#69511b',
        },
        bronze: {
          light: '#df9c5c',
          DEFAULT: '#cd7f32',
          dark: '#a8601c',
        },
        parchment: {
          light: '#fbf8ee',
          DEFAULT: '#f3ebd4',
          dark: '#e5d8b8',
          aged: '#cfbe93',
        },
        crimson: {
          light: '#b84236',
          DEFAULT: '#8f2d24',
          dark: '#631d17',
        },
        olive: {
          light: '#5e6828',
          DEFAULT: '#4b5320',
          dark: '#353a17',
        },
        steel: {
          light: '#9aa3ab',
          DEFAULT: '#6e7781',
          dark: '#485058',
        },
        deccan: {
          earth: '#3d3024',
          stone: '#26211c',
          saffron: '#e86a17',
          copper: '#c2622b',
        },
        imperial: {
          navy: '#12233f',
          blue: '#1e3a8a',
          gold: '#d4af37',
        }
      },
      fontFamily: {
        display: ['Cinzel', 'Cinzel Decorative', 'Georgia', 'serif'],
        heading: ['Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'parchment-pattern': "radial-gradient(ellipse at center, rgba(199, 162, 84, 0.05) 0%, rgba(12, 15, 18, 0.95) 100%)",
        'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      boxShadow: {
        'archival': '0 4px 20px -2px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(199, 162, 84, 0.15)',
        'archival-hover': '0 10px 30px -4px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(199, 162, 84, 0.4)',
      },
    },
  },
  plugins: [],
}
