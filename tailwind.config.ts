import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px',
        screens: {
          xl: '1440px'
        }
      },
      colors: {
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)'
      },
      backgroundImage: {
        'gradient-btn-green': 'linear-gradient(180deg, #16B98D 0%, #0B5D47 100%)',
        'gradient-green': 'linear-gradient(259deg, #16B98D 0%, #0B5D47 100%)',
        'gradient-border': 'linear-gradient(290deg, #ffffff 0%, #444444 100%)',
        'gradient-header':'linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)'
      },
      fontFamily: {
        urbanist: ['var(--font-urbanist)']
      },
      keyframes: {
        up: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-20px)' }
        },
        down: {
          '0%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        'move-up': 'up 2s infinite alternate',
        'move-down': 'down 2s infinite alternate'
      }
    }
  },
  plugins: []
}
export default config
