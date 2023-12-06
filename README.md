# Tailwind CSS Mask Plugin
A Tailwind CSS plugin that provides utilities for working with mask properties, allowing you to easily apply masking effects to your elements.

Try it on the [TailwindCSS Playground](https://play.tailwindcss.com/sRf6nKJ5Qw)



## Installation

Install the plugin via npm:

```bash
npm install @lostisworld/tailwind-mask
```
```bash
pnpm add @lostisworld/tailwind-mask
```

## Usage

Include the plugin in your Tailwind CSS configuration file (`tailwind.config.js`):

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // ... other configurations
    }
  plugins: [
    // ... other plugins
    require('@lostisworld/tailwind-mask'),
  ],
};
```

## Available Classes and Properties


### `mask-image-*`
**Possible values:** `gradient-to-t`, `gradient-to-tr`, `gradient-to-tl`, `gradient-to-r`, `gradient-to-b`, `gradient-to-br`, `gradient-to-bl`, `gradient-to-l`

You can also use Tailwind CSS gradient classes for masking image properties. The following example demonstrates how to use the default Tailwind gradient classes:

```html
<div class="mask-image-gradient-to-b from-transparent to-black to-90%">
  <!-- Your content here -->
</div>
```
Here, `from-transparent`, `to-black` and `to-90%` are standard Tailwind gradient color classes.

### `mask-size-*`
**Possible values:** `cover`, `contain`, `100`, `50`, `space`, `auto`

```html
<div class="mask-size-auto">
  <!-- Your content here -->
</div>
```

### `mask-repeat-*`
**Possible values:** `no-repeat`, `repeat`, `repeat-x`, `repeat-y`, `space`, `round`

```html
<div class="mask-repeat-round">
  <!-- Your content here -->
</div>
```

### `mask-position-*`

```html
<div class="mask-position-center">
  <!-- Your content here -->
</div>
```

### `mask-origin-*`
**Possible values:** `border-box`, `content-box`, `padding-box`, `fill-box`, `stroke-cox`, `view-box`

```html
<div class="mask-origin-border-box">
  <!-- Your content here -->
</div>
```

### `mask-clip-*`
**Possible values:** `border-box`, `content-box`, `padding-box`, `fill-box`, `stroke-cox`, `view-box`

```html
<div class="mask-clip-fill-box">
  <!-- Your content here -->
</div>
```

### `mask-type-*`
**Possible values:** `luminance`, `alpha`

```html
<div class="mask-type-alpha">
  <!-- Your content here -->
</div>
```

### `mask-composite-*`
**Possible values:** `add`, `substract`, `intersect`, `exclude`

```html
<div class="mask-composite-exclude">
  <!-- Your content here -->
</div>
```

### `mask-mode-*`
**Possible values:** `luminance`, `alpha`, `match-source`

```html
<div class="mask-mode-luminance">
  <!-- Your content here -->
</div>
```

### `mask-*-[customValue]`

For enhanced customization, users can incorporate dynamic values directly within HTML classes for any `mask-*` property. By adopting the syntax `mask-*-[customValue]`, users can seamlessly integrate personalized values into various mask properties like `image`, `size`, `repeat`, `position`, `clip`, `type`, `origin`, `mode`, and `composite`. This approach empowers users to effortlessly fine-tune the appearance of their elements by providing custom values specific to each mask property directly in their HTML markup.


```html
<div class="mask-image-[url('/path/to/mask.svg')]">
  <!-- Your content here -->
</div>
```

## Certainly! Here are the examples using your Tailwind CSS mask plugin classes:
```html
<figure class="bg-blue-500 rounded-lg overflow-hidden">
    <img src="/yourImagePath" alt="" class="h-96 from-black to-transparent to-90% mask-image-gradient-to-b" />
</figure>
```

![](./images/image-gradient.jpg)

```html
<img src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="h-96 w-96 object-cover mask-image-[url(shapePath.svg)]" />
```

![](./images/image-shape.jpg)

## Customization
Customize the default values or add your own variations for each property in the `theme` section of your Tailwind CSS configuration file:
For custom values, it's essential to encapsulate them within a `mask: {}` object. Within this object, you can define specific properties such as `size`, `repeat`, `position`, `clip`, `type`, `origin`, `mode`, and `composite`. This structure ensures clarity and allows you to tailor each property according to your preferences.

```javascript
// tailwind.config.js
module.exports = {
  // ... other configurations
  theme: {
    mask: {
      image: {
        // Customize image options
      },
      size: {
        // Customize size options
      },
      // ... other customization options
    },
  },
};
```

## License

This Tailwind CSS plugin is open-source and available under the [MIT License](LICENSE).

---

Feel free to customize the sections as needed, and provide more details if necessary. Ensure to keep the information clear and concise, and include any additional instructions or examples that might be helpful for users.