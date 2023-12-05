# Tailwind Mask
A plugin for TailwindCSS that allows to use CSS mask properties.

### [Live Demo](https://play.tailwindcss.com/sRf6nKJ5Qw)

## Instalation
> using npm
```
npm install tailwind-mask
```
> using pnpm
```
pnpm add tailwind-mask
```

Then add the plugin to your ´´tailwind.config.js`` file
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // ...
    }
  },
  plugins: [
    require('@lostisworld/tailwind-mask'),
    // ...
  ],
}
```

## Default classes

| Class              | Values                                                                                                                     |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| mask-image-*       | gradient-to-t, gradient-to-tr, gradient-to-r, gradient-to-br, gradient-to-b, gradient-to-bl, gradient-to-l, gradient-to-tl |
| mask-size-*        | cover, contain, 100, 50, auto                                                                                              |
| mask-repeat-*      | no-repeat, repeat, repeat-x, repeat-y, space, round                                                                        |
| mask-position-*    | center, top, bottom, left, right, center-top, center-bottom, center-left, center-right                                     |
| mask-clip-*        | border-box, content-box, padding-box, fill-box, stroke-cox, view-box                                                       |
| mask-type-*        | luminance, alpha                                                                                                           |
| mask-origin-*      | border-box, content-box, padding-box, fill-box, stroke-cox, view-box                                                       |
| mask-mode-*        | luminance, alpha, match-source                                                                                             |
| mask-composite-*   | add, substract, intersect, exclude                                                                                         |


## Add custom values inside your ``tailwind.config.js`` file.
All custom values need to be inside an ``mask: {}`` object. Possible values are ``size``, ``repeat``, ``position``, ``clip``, ``type``, ``origin``, ``mode``, ``composite``

```js
module.exports = {
  theme: {
    extend: {
      mask: {
        image: {
          avatar: 'url(IMAGE-PATH)',
        }
        size: {}
        repeat: {}
        //...
      }
    }
  }
}
```
