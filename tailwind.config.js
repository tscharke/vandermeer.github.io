module.exports = {
  content: [
    '**/*.{html,md}',
  ],
  theme: {
    extend:
      {
        fontFamily: {
          'vdm': ['vdm'],
        },
        fontSize: {
          base: '1rem',
        },
        colors: {
          DEFAULT: "#000000",
          'red': '#ac325b',
          'blue': '#007cc3',
          'gray': {
            '200': '#f3f3f3',
            '500': '#c9c9c9',
            '700': '#bababa',
          },
        },lineHeight: {
          '12': '3rem',
        },
        boxShadow: {
          DEFAULT: '0px 0px 20px 10px',
        }
      },
  },
}
