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
        },
        size: {
          cover: 'cover',
          contain: 'contain',
          100: '100% 100%',
          50: '50% 50%',
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
