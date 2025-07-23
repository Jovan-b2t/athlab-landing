/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brighter, More Saturated Navy (hue 245)
        navy: {
          50: 'hsl(245, 60%, 95%)',
          100: 'hsl(245, 60%, 85%)',
          200: 'hsl(245, 55%, 75%)',
          300: 'hsl(245, 50%, 65%)',
          400: 'hsl(245, 45%, 55%)',
          500: 'hsl(245, 40%, 45%)',
          600: 'hsl(245, 50%, 35%)',
          700: 'hsl(245, 55%, 25%)',
          800: 'hsl(245, 60%, 18%)',
          900: 'hsl(245, 65%, 12%)',
          950: 'hsl(245, 70%, 8%)',
        },
        // Toned Down Cyber (more natural mint)
        cyber: {
          50: 'hsl(155, 85%, 95%)',
          100: 'hsl(155, 85%, 85%)',
          200: 'hsl(155, 85%, 75%)',
          300: 'hsl(155, 85%, 65%)',
          400: 'hsl(155, 85%, 58%)',
          500: 'hsl(155, 85%, 55%)', // Toned down main
          600: 'hsl(155, 85%, 48%)',
          700: 'hsl(155, 85%, 38%)',
          800: 'hsl(155, 85%, 28%)',
          900: 'hsl(155, 85%, 18%)',
        },
        // Matte Darks
        matte: {
          100: 'hsl(0, 0%, 12%)',
          200: 'hsl(0, 0%, 10%)',
          300: 'hsl(0, 0%, 8%)',
          400: 'hsl(0, 0%, 6%)',
          500: 'hsl(0, 0%, 4%)',
        }
      },
      fontFamily: {
        'clash': ['var(--font-clash)', 'sans-serif'],
        'space': ['var(--font-space)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-glow': 'linear-gradient(135deg, hsl(155, 98%, 50%), hsl(155, 98%, 30%))',
        'navy-depth': 'linear-gradient(135deg, hsl(245, 40%, 8%), hsl(245, 45%, 4%))',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
      },
      scale: {
        '102': '1.02',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 4px hsl(155, 85%, 55%, 0.4), 0 0 8px hsl(155, 85%, 55%, 0.3), 0 0 16px hsl(155, 85%, 55%, 0.2)',
            transform: 'scale(1)' 
          },
          '50%': { 
            boxShadow: '0 0 4px hsl(155, 85%, 55%, 0.8), 0 0 8px hsl(155, 85%, 55%, 0.6), 0 0 16px hsl(155, 85%, 55%, 0.4), 0 0 32px hsl(155, 85%, 55%, 0.2)',
            transform: 'scale(1.02)' 
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
} 