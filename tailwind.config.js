/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#789600',
        'deep-olive': '#5E7700',
        'soft-sage': '#A9BA57',
        'warm-ivory': '#F8F7F2',
        'luxury-white': '#FFFFFF',
        'stone-gray': '#D9D6CE',
        'charcoal': '#1D1D1B',
        'muted-taupe': '#8B8579',
        'soft-gold': '#C8A96B',
        'light-gold': '#E8D5A3',
        'warm-beige': '#EDE8DF',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.06em',
        'logo': '0.125em',
        'tight-heading': '-0.02em',
        'widest-luxury': '0.2em',
      },
      boxShadow: {
        'card': '0 2px 16px rgba(29, 29, 27, 0.06)',
        'card-hover': '0 8px 32px rgba(29, 29, 27, 0.12)',
        'nav': '0 1px 20px rgba(29, 29, 27, 0.08)',
        'premium': '0 20px 60px rgba(29, 29, 27, 0.10)',
        'soft': '0 4px 24px rgba(29, 29, 27, 0.06)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      animation: {
        'scroll-slow': 'scroll 60s linear infinite',
        'hero-zoom': 'hero-zoom 12s ease-out forwards',
        'fade-up': 'fade-up 0.7s ease-out forwards',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'hero-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #F8F7F2 0%, #EDE8DF 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C8A96B 0%, #E8D5A3 100%)',
        'charcoal-gradient': 'linear-gradient(135deg, #1D1D1B 0%, #2d2d2b 100%)',
      },
    },
  },
  plugins: [],
};
