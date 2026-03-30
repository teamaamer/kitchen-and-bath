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
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.06em',
        'logo': '0.125em',
        'tight-heading': '-0.01em',
      },
      animation: {
        'scroll-slow': 'scroll 60s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
