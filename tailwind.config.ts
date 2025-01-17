import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },

    fontFamily: {
      Jersey_10: ['jersey'],
      titi: ['titi'],
      titibold: ['titibold'], // Add your custom font
    },
  },
  plugins: [],
} satisfies Config
