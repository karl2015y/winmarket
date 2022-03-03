module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
    // etc.
  ],

  theme: {
    extend: {
      colors: {
        main: '#EC781E',
        sec: '#656565',
        third: '#898989',
        skin: {
          50:  "var(--color-base-50)",
          100: "var(--color-base-100)",
          200: "var(--color-base-200)",
          300: "var(--color-base-300)",
          400: "var(--color-base-400)",
          500: "var(--color-base-500)",
          600: "var(--color-base-600)",
          700: "var(--color-base-700)",
          800: "var(--color-base-800)",
          900: "var(--color-base-900)",
        }
        
       
      },
      fontFamily: {
        NST: ["Noto Sans TC"],
       },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  variants: {
    lineClamp: ['responsive', 'hover']
  }
}