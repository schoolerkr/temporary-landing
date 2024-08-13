import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        schooler: {
          black: '#222222',
          deepyellow: '#FFA800',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
