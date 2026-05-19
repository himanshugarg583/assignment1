import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#08213C',
        accent: '#3CB98C',
        ink: '#0B1320',
        midnight: '#060B14',
        steel: '#0F2748',
        mist: '#F5F7FA',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', '"Sora"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px rgba(60, 185, 140, 0.35)',
        glowTight: '0 0 24px rgba(60, 185, 140, 0.45)',
        soft: '0 10px 30px rgba(8, 33, 60, 0.18)',
        glass: '0 20px 50px rgba(8, 33, 60, 0.2)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(60, 185, 140, 0)' },
          '50%': { boxShadow: '0 0 30px rgba(60, 185, 140, 0.45)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'float 10s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.8s ease-in-out infinite',
        marquee: 'marquee 24s linear infinite',
        shimmer: 'shimmer 6s ease infinite',
        orbit: 'orbit 24s linear infinite',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at 10% 10%, rgba(60, 185, 140, 0.18), transparent 45%), radial-gradient(circle at 90% 20%, rgba(60, 185, 140, 0.12), transparent 40%), radial-gradient(circle at 40% 80%, rgba(8, 33, 60, 0.4), transparent 50%)',
        grid:
          'linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [animate],
}

