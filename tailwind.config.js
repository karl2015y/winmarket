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