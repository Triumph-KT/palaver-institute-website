/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Palaver Institute Brand Colors
      colors: {
        palaver: {
          'orange-primary': '#C17A47',
          'orange-secondary': '#D4924F',
          'blue-accent': '#4A6B8A',
          'blue-deep': '#2D4B6B',
          'purple-warm': '#7A5B8A',
          'brown-earth': '#8B5A3C',
          'cream-light': '#F5F1EB',
        },
        text: {
          'dark': '#2C2C2C',
          'medium': '#5A5A5A',
          'light': '#7A7A7A',
        }
      },
      // Custom font family
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}