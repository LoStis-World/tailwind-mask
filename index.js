const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  ({ addUtilities, matchUtilities, theme, e }) => {
    const values = theme('mask') ?? {}
    const maskUtilities = {}

    // Iterate over the theme values and generate utilities
    Object.entries(values).map(([key, values]) => {
      if (typeof values !== 'object') return
      // If the value is an object, iterate over its entries
      Object.entries(values).map(([subKey, subValue]) => {
        maskUtilities[`.${e(`mask-${key}-${subKey}`)}`] = {
          [`--lw-mask-${key}`]: subValue,
          [`mask-${key}`]: `var(--lw-mask-${key})`,
        }
      })
    })

    // Add the generated utilities to Tailwind CSS
    addUtilities(maskUtilities)

    if (matchUtilities) {
      matchUtilities(
        {
          'mask-image': value => ({
            '--lw-mask-image': value,
            'mask-image': 'var(--lw-mask-image)',
          }),
          'mask-size': value => ({
            '--lw-mask-size': value,
            'mask-size': 'var(--lw-mask-size)',
          }),
          'mask-repeat': value => ({
            '--lw-mask-repeat': value,
            'mask-repeat': 'var(--lw-mask-repeat)',
          }),
          'mask-position': value => ({
            '--lw-mask-position': value,
            'mask-position': 'var(--lw-mask-position)',
          }),
          'mask-origin': value => ({
            '--lw-mask-origin': value,
            'mask-origin': 'var(--lw-mask-origin)',
          }),
          'mask-clip': value => ({
            '--lw-mask-clip': value,
            'mask-clip': 'var(--lw-mask-clip)',
          }),
          'mask-type': value => ({
            '--lw-mask-type': value,
            'mask-type': 'var(--lw-mask-type)',
          }),
          'mask-composite': value => ({
            '--lw-mask-composite': value,
            'mask-composite': 'var(--lw-mask-composite)',
          }),
          'mask-mode': value => ({
            '--lw-mask-mode': value,
            'mask-mode': 'var(--lw-mask-mode)',
          }),
        },
        { values }
      )

      return
    }
  },
  {
    theme: {
      mask: {
        image: {
          'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
          'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
          'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
          'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
          'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
          'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
          'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
          'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',

          'radial-at-c': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
          'radial-at-t': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
          'radial-at-tr': 'radial-gradient(circle at top right, var(--tw-gradient-stops))',
          'radial-at-r': 'radial-gradient(circle at right, var(--tw-gradient-stops))',
          'radial-at-br': 'radial-gradient(circle at bottom right, var(--tw-gradient-stops))',
          'radial-at-b': 'radial-gradient(circle at bottom, var(--tw-gradient-stops))',
          'radial-at-bl': 'radial-gradient(circle at bottom left, var(--tw-gradient-stops))',
          'radial-at-l': 'radial-gradient(circle at left, var(--tw-gradient-stops))',
          'radial-at-tl': 'radial-gradient(circle at top left, var(--tw-gradient-stops))',
        },
        size: {
          cover: 'cover',
          contain: 'contain',
          px: '1px',
          '0.5': '0.125rem',
          '1': '0.25rem',
          '1.5': '0.375rem',
          '2': '0.5rem',
          '2.5': '0.625rem',
          '3': '0.75rem',
          '3.5': '0.875rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '7': '1.75rem',
          '8': '2rem',
          '9': '2.25rem',
          '10': '2.5rem',
          '11': '2.75rem',
          '12': '3rem',
          '14': '3.5rem',
          '16': '4rem',
          '20': '5rem',
          '24': '6rem',
          '28': '7rem',
          '32': '8rem',
          '36': '9rem',
          '40': '10rem',
          '44': '11rem',
          '48': '12rem',
          '52': '13rem',
          '56': '14rem',
          '60': '15rem',
          '64': '16rem',
          '72': '18rem',
          '80': '20rem',
          '96': '24rem',
          '1/2': '50% 50%',
          '1/3': '33.333333% 33.333333%',
          '2/3': '66.666667% 66.666667%',
          '1/5': '20% 20%',
          '1/4': '25% 25%',
          full: '100% 100%',
          auto: 'auto',
        },
        repeat: {
          'no-repeat': 'no-repeat',
          repeat: 'repeat',
          'repeat-x': 'repeat-x',
          'repeat-y': 'repeat-y',
          space: 'space',
          round: 'round',
        },
        position: {
          center: 'center',
          top: 'top',
          bottom: 'bottom',
          left: 'left',
          right: 'right',
          'center-top': 'center top',
          'center-bottom': 'center bottom',
          'center-left': 'center left',
          'center-right': 'center right',
        },
        origin: {
          'border-box': 'border-box',
          'content-box': 'content-box',
          'padding-box': 'padding-box',
          'fill-box': 'fill-box',
          'stroke-box': 'stroke-box',
          'view-box': 'view-box',
        },
        clip: {
          'border-box': 'border-box',
          'content-box': 'content-box',
          'padding-box': 'padding-box',
          'fill-box': 'fill-box',
          'stroke-box': 'stroke-box',
          'view-box': 'view-box',
        },
        type: {
          luminance: 'luminance',
          alpha: 'alpha',
        },
        composite: {
          add: 'add',
          subtract: 'subtract',
          intersect: 'intersect',
          exclude: 'exclude',
        },
        mode: {
          alpha: 'alpha',
          luminance: 'luminance',
          'match-source': 'match-source',
        },
      },
    },
  }
)
