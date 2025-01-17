import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        lg: '1280px',
        sm: '140px',
        md: '650px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },

    fontFamily: {
      Jersey: ['jersey'],
      titi: ['titi'],
      titibold: ['titibold'], // Add your custom font
    },
  },
  plugins: [],
} satisfies Config
