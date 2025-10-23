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
          orange: {
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#C17A47', // Primary
            600: '#B8693A',
            700: '#9A4E2D',
            800: '#7C2D12',
            900: '#431407',
          },
          blue: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#4A6B8A', // Accent
            600: '#3E5A75',
            700: '#334960',
            800: '#1E293B',
            900: '#0F172A',
          },
          purple: {
            50: '#FAF5FF',
            100: '#F3E8FF',
            200: '#E9D5FF',
            300: '#D8B4FE',
            400: '#C084FC',
            500: '#7A5B8A', // Warm
            600: '#6B4C7A',
            700: '#5C3D6B',
            800: '#4C2E5C',
            900: '#3D1F4D',
          },
          brown: {
            50: '#FAFAF9',
            100: '#F5F5F4',
            200: '#E7E5E4',
            300: '#D6D3D1',
            400: '#A8A29E',
            500: '#8B5A3C', // Earth
            600: '#78502F',
            700: '#654622',
            800: '#523C15',
            900: '#3F3208',
          },
          cream: {
            50: '#FFFEF7',
            100: '#F5F1EB', // Light
            200: '#EBE3D5',
            300: '#E1D5BF',
            400: '#D7C7A9',
            500: '#CDB993',
            600: '#C3AB7D',
            700: '#B99D67',
            800: '#AF8F51',
            900: '#A5813B',
          },
        },
        text: {
          dark: '#2C2C2C',
          medium: '#5A5A5A',
          light: '#7A7A7A',
        },
        // Semantic colors
        success: {
          50: '#F0FDF4',
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
        },
      },
      // Custom font family
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'bounce-slow': 'bounce 2s infinite',
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
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      // Custom shadows
      boxShadow: {
        'palaver': '0 4px 14px 0 rgba(193, 122, 71, 0.15)',
        'palaver-lg': '0 10px 25px -3px rgba(193, 122, 71, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}