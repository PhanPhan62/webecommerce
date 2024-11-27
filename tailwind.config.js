/** @type {import('tailwindcss').Config} */
import { blackA, green, mauve, slate, violet } from '@radix-ui/colors'


export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        ...blackA,
        ...green,
        ...mauve,
        ...slate,
        ...violet,
        mainColor: "#1cc0a0"
      },
      keyframes: {
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideIn: {
          from: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        },
      },
      animation: {
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
      },
      backgroundImage: {
        'banner-1': "url('@/imgs/banners/banner-1.jpg')",
        'banner-2': "url('@/imgs/banners/banner-2.jpg')",
        'banner-3': "url('@/imgs/banners/banner-3.jpg')",
        'banner-4': "url('@/imgs/banners/banner-4.jpg')",
      },
      strokeWidth: {
        thin: '0.5',
        solid: '1',
      },
      fontSize: {
        icon: '24px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '48px',
        '5xl': '64px',
      },
      userSelect: {
        none: 'none', // Thêm lớp cấm bôi đen
      },
  	},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      // center: true,
    },
  },
  variants: {
    userSelect: ['responsive'], // Thêm biến thể cho responsive
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
}


 