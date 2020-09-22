module.exports = {
  theme: {
    screens: {
      'xs': '320px',
      'sm': '601px',
      'md': '901px',
      'lg': '1201px',
      'xl': '1801px',
      'wide': '1921px',
      'phone': {'max': '600px'},
      // 'tablet-portrait': { 'min': '601px', 'max': '900px' },
      // 'tablet-landscape': { 'min': '901px', 'max': '1200px' },
      'tablet-portrait': { 'raw': '(orientation: portrait) and (min-width: 601px) and (max-width: 900px)' },
      'tablet-landscape': { 'raw': '(orientation: landscape) and (min-width: 901px) and (max-width: 1200px)' },
      'desktop': { 'min': '1201px', 'max': '1800px' },
      'desktop-big': { 'min': '1801px', 'max': '1920px' },
      'desktop-wide': { 'min': '1920px' }, // same as 'wide'
      'portrait': { 'raw': '(orientation: portrait), (max-width: 900px)' },
      'landscape': { 'raw': '(orientation: landscape) and (min-width: 901px)' },
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'work-sans': ['Work Sans', 'sans-serif'],
    },
    extend: {
      /* Generic, Miscellaneous */
      colors: {
        /* Social Media */
        'socialmedia-fb': '#1877f2', // almost dodger-blue #1e90ff
        'socialmedia-tw': '#1da1f2', // almost dodger-blue #1e90ff
        'socialmedia-ig': '#e4405f', // almost cerise #de3163
        'socialmedia-pin': '#bd081c', // almost venetian-red #c80815
        'socialmedia-li': '#0077b5', // almost cerulean #007ba7
        'socialmedia-yt': '#ff0000',

        /* Reds */
        'red': '#ff0000',
        'hot-pink': '#dd2e88', // almost deep-cerise #da3287
        'pink': '#cf2d82', // almost deep-cerise #da3287
        'dark-pink': '#a71f66', // almost jazzberry-jam #a50b5e

        /* Purples/Violets/Indigos */
        'violet': '#4f418c', // almost blue-gem #4b3c8e
        'light-indigo': '#ae9df2', // almost biloba-flower #ae99d2

        /* Blues */
        'dark-blue': '#163c79', // almost dark-cerulean #08457e
        'cyan': '#79ffe1', // almost aquamarine #7fffd4

        /* Greens */
        'success': '#0070f3', // almost navy-blue #0066CC

        /* Yellows */
        'dark-gold': '#c3922e', // almost nugget #bc9229
        'golden': '#ffd200', // almost gold #ffd700
        'gold': '#ebbb10', // almost moon-yellow #f0c420
        'light-gold': '#eed688', // almost buff #f0dc82
        'white-gold': '#fffbcc', // almost lemon-chiffon #fffacd

        /* Oranges */

        /* Browns */

        /* Whites */
        'white': '#fff',
        'snow': '#fffafa',
        'white98': '#fafafa', // almost snow #fffafa
        'white-smoke': '#f5f5f5',

        /* Grays */
        'gray94-9': '#f2f2f2', // almost white-smoke #f5f5f5
        'gray93': '#eee', // almost whisper #efe6e6
        'gray92': '#eaeaea', // almost whisper #efe6e6
        'gray62-4': '#9f9f9f', // almost nobel #a99d9d
        'gray60': '#999', // almost nobel #a99d9d
        'gray54-1': '#8a8a8a', // almost suva-grey #8b8685
        'gray20': '#333', // almost night-rider #332e2e

        /* Blacks */
        'black19-6': '#323232', // almost night-rider #332e2e
        'black15-7': '#282828', // almost nero #252525
        'black11-8': '#1e1e1e', // almost nero #252525
        'black': '#000',
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
        100: '1',
      },
      backgroundOpacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9',
        100: '1',
      },
      boxShadow: {
        default: '0px 12px 18px -6px rgba(0, 0, 0, 0.7)',
        white: '0px 12px 38px -7px rgba(255, 255, 255, 0.6)',
        tc: '0px 12px 38px 0px rgba(0, 0, 0, 0.6)',
      },
      borderRadius: {
        10: '1rem',
        30: '3rem',
      },
      borderWidth: {
        '3': '3px',
      },
      flex: {
        '2': '2 2 0%',
      },

      /* Layout, Spacing */
      inset: { // top, right, bottom, left
        '30vh': '30vh',
        80: '8rem',
        100: '10rem',
      },
      space: {},
      spacing: {
        '20px': '20px',
        '4em': '0.4em',
        1: '0.1rem',
        2: '0.2rem',
        3: '0.3rem',
        4: '0.4rem',
        5: '0.5rem',
        6: '0.6rem',
        7: '0.7rem',
        8: '0.8rem',
        9: '0.9rem',
        10: '1rem',
        11: '1.1rem',
        12: '1.2rem',
        13: '1.3rem',
        14: '1.4rem',
        15: '1.5rem',
        16: '1.6rem',
        17: '1.7rem',
        18: '1.8rem',
        19: '1.9rem',
        20: '2rem',
        21: '2.1rem',
        22: '2.2rem',
        23: '2.3rem',
        24: '2.4rem',
        25: '2.5rem',
        26: '2.6rem',
        27: '2.7rem',
        28: '2.8rem',
        29: '2.9rem',
        30: '3rem',
        31: '3.1rem',
        32: '3.2rem',
        33: '3.3rem',
        34: '3.4rem',
        35: '3.5rem',
        36: '3.6rem',
        37: '3.7rem',
        38: '3.8rem',
        39: '3.9rem',
        40: '4rem',
        41: '4.1rem',
        42: '4.2rem',
        43: '4.3rem',
        44: '4.4rem',
        45: '4.5rem',
        46: '4.6rem',
        47: '4.7rem',
        48: '4.8rem',
        49: '4.9rem',
        50: '5rem',
        51: '5.1rem',
        52: '5.2rem',
        53: '5.3rem',
        54: '5.4rem',
        55: '5.5rem',
        56: '5.6rem',
        57: '5.7rem',
        58: '5.8rem',
        59: '5.9rem',
        60: '6rem',
        61: '6.1rem',
        62: '6.2rem',
        63: '6.3rem',
        64: '6.4rem',
        65: '6.5rem',
        66: '6.6rem',
        67: '6.7rem',
        68: '6.8rem',
        69: '6.9rem',
        70: '7rem',
        75: '7.5rem',
        80: '8rem',
        85: '8.5rem',
        90: '9rem',
        95: '9.5rem',
        100: '10rem',
        105: '10.5rem',
        110: '11rem',
        115: '11.5rem',
        120: '12rem',
        125: '12.5rem',
        130: '13rem',
        135: '13.5rem',
        140: '14rem',
        145: '14.5rem',
        150: '15rem',
        155: '15.5rem',
        160: '16rem',
        165: '16.5rem',
        170: '17rem',
        175: '17.5rem',
        180: '18rem',
        185: '18.5rem',
        190: '19rem',
        195: '19.5rem',
        200: '20rem',
      },

      /* Typography */
      fontSize: {
        'clamp-9': 'clamp(8px, 0.9rem, 9px)',
        '9-5': '0.95rem',
        10: '1rem',
        11: '1.1rem',
        12: '1.2rem',
        13: '1.3rem',
        14: '1.4rem',
        15: '1.5rem',
        16: '1.6rem',
        17: '1.7rem',
        18: '1.8rem',
        19: '1.9rem',
        20: '2rem',
        21: '2.1rem',
        22: '2.2rem',
        23: '2.3rem',
        24: '2.4rem',
        25: '2.5rem',
        26: '2.6rem',
        27: '2.7rem',
        28: '2.8rem',
        29: '2.9rem',
        30: '3rem',
        31: '3.1rem',
        32: '3.2rem',
        33: '3.3rem',
        34: '3.4rem',
        35: '3.5rem',
        36: '3.6rem',
        37: '3.7rem',
        38: '3.8rem',
        39: '3.9rem',
        40: '4rem',
        41: '4.1rem',
        42: '4.2rem',
        43: '4.3rem',
        44: '4.4rem',
        45: '4.5rem',
        46: '4.6rem',
        47: '4.7rem',
        48: '4.8rem',
        49: '4.9rem',
        50: '5rem',
        51: '5.1rem',
        52: '5.2rem',
        53: '5.3rem',
        54: '5.4rem',
        55: '5.5rem',
        56: '5.6rem',
        57: '5.7rem',
        58: '5.8rem',
        59: '5.9rem',
        60: '6rem',
        61: '6.1rem',
        62: '6.2rem',
        63: '6.3rem',
        64: '6.4rem',
        65: '6.5rem',
        66: '6.6rem',
        67: '6.7rem',
        68: '6.8rem',
        69: '6.9rem',
        70: '7rem',
        75: '7.5rem',
        80: '8rem',
        85: '8.5rem',
        90: '9rem',
        95: '9.5rem',
        100: '10rem',
      },
      lineHeight: {
        double: '2',
        heading: '1.5',
        normal: '1.2',
        oneplus: '1.15',
        one: '1.1',
        none: '1',
        uppercase: '0.9',
      },
      letterSpacing: {
        15: '0.15em',
        25: '0.25em',
      },

      /* Sizing */
      width: {
        'icon': '1em',
        'half': '50%',
        90: '9rem',
      },
      minWidth: {},
      maxWidth: {},
      height: {
        'icon': '1em', // header
        90: '9rem',
      },
      minHeight: {},
      maxHeight: {},
    },
  },
  variants: { // alphabetical order
    borderWidth: ['responsive', 'hover', 'first', 'last'],
    cursor: ['responsive', 'hover'],
    margin: ['responsive', 'first', 'last'],
  },
  plugins: [],
  purge: {
    enabled: (process.env.NODE_ENV === 'production' ? true : false),
    content: [
      './pages/**/*.{js,jsx,ts,tsx,mdx}',
      './components/**/*.{js,jsx,ts,tsx,mdx}',
    ],
  }
}
