# Tailwind CSS Mask Plugin
![](./images/plugin-header.jpg)

A Tailwind CSS plugin that provides utilities for working with mask properties, allowing you to easily apply masking effects to your elements.

Try it on the [TailwindCSS Playground](https://play.tailwindcss.com/oTBggTIH2m)



## Installation

Install the plugin via npm:

```bash
npm install @lostisworld/tailwind-mask
```
Install the plugin via pnpm:
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
**Possible values:** `gradient-to-t`, `gradient-to-tr`, `gradient-to-tl`, `gradient-to-r`, `gradient-to-b`, `gradient-to-br`, `gradient-to-bl`, `gradient-to-l`, `radial-at-c`, `radial-at-t`, `radial-at-tr`, `radial-at-r`, `radial-at-br`, `radial-at-b`, `radial-at-bl`, `radial-at-l`, `radial-at-tl`

You can also use Tailwind CSS gradient classes for masking image properties. The following example demonstrates how to use the default Tailwind gradient classes:

```html
<div class="mask-image-gradient-to-b from-transparent to-black to-90%">
  <!-- Your content here -->
</div>
```
Here, `from-transparent`, `to-black` and `to-90%` are standard Tailwind gradient color classes.

**Browser Compatibility:** [MDN Documentation for `mask-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image#browser_compatibility)

### `mask-size-*`
**Possible values:** `cover`, `contain`, `px`, `0.5`, `1`, `1.5`, `2`, `2.5`, `3`, `3.5`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `14`, `16`, `20`, `24`, `28`, `32`, `36`, `40`, `44`, `48`, `52`, `56`, `60`, `64`, `72`, `80`, `96`, `1/2`, `1/3`, `2/3`, `1/4`, `1/5`, `full`, `space`, `auto`

```html
<div class="mask-size-auto">
  <!-- Your content here -->
</div>
```
**Browser Compatibility:** [MDN Documentation for `mask-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-size#browser_compatibility)


### `mask-repeat-*`
**Possible values:** `no-repeat`, `repeat`, `repeat-x`, `repeat-y`, `space`, `round`

```html
<div class="mask-repeat-round">
  <!-- Your content here -->
</div>
```
**Browser Compatibility:** [MDN Documentation for `mask-repeat`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-repeat#browser_compatibility)

### `mask-position-*`
**Possible values:** `top`, `left`, `right`, `center`, `bottom`, `center-top`, `center-bottom`, `center-left`, `center-right`   

```html
<div class="mask-position-center">
  <!-- Your content here -->
</div>
```
**Browser Compatibility:** [MDN Documentation for `mask-position`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-position#browser_compatibility)

### `mask-origin-*`
**Possible values:** `border-box`, `content-box`, `padding-box`, `fill-box`, `stroke-cox`, `view-box`

```html
<div class="mask-origin-border-box">
  <!-- Your content here -->
</div>
```
**Browser Compatibility:** [MDN Documentation for `mask-origin`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-origin#browser_compatibility)

### `mask-clip-*`
**Possible values:** `border-box`, `content-box`, `padding-box`, `fill-box`, `stroke-cox`, `view-box`

```html
<div class="mask-clip-fill-box">
  <!-- Your content here -->
</div>
```
**Browser Compatibility:** [MDN Documentation for `mask-clip`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-clip#browser_compatibility)

### `mask-type-*`
**Possible values:** `luminance`, `alpha`

```html
<div class="mask-type-alpha">
  <!-- Your content here -->
</div>
```
**Browser Compatibility:** [MDN Documentation for `mask-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-type#browser_compatibility)

### `mask-composite-*`
**Possible values:** `add`, `substract`, `intersect`, `exclude`

```html
<div class="mask-composite-exclude">
  <!-- Your content here -->
</div>
```
**Browser Compatibility:** [MDN Documentation for `mask-composite`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-composite#browser_compatibility)

### `mask-mode-*`
**Possible values:** `luminance`, `alpha`, `match-source`

```html
<div class="mask-mode-luminance">
  <!-- Your content here -->
</div>
```
**Browser Compatibility:** [MDN Documentation for `mask-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask-mode#browser_compatibility)

### `mask-*-[customValue]`

For enhanced customization, users can incorporate dynamic values directly within HTML classes for any `mask-*` property. By adopting the syntax `mask-*-[customValue]`, users can seamlessly integrate personalized values into various mask properties like `image`, `size`, `repeat`, `position`, `clip`, `type`, `origin`, `mode`, and `composite`. This approach empowers users to effortlessly fine-tune the appearance of their elements by providing custom values specific to each mask property directly in their HTML markup.


```html
<div class="mask-image-[url('/path/to/mask.svg')]">
  <!-- Your content here -->
</div>
```

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

[Using CSS Mask with animation](https://www.sveltelab.dev/efkf16p9hhut2vk?files=.%2Fsrc%2Froutes%2F%2Bpage.svelte)

![](./images/mask-mouse-tracker.jpg)

### **Use Autoprefixer and remember to check the most up-to-date information on browser compatibility.**

## License

This Tailwind CSS plugin is open-source and available under the [MIT License](LICENSE).

---

Feel free to customize the sections as needed, and provide more details if necessary. Ensure to keep the information clear and concise, and include any additional instructions or examples that might be helpful for users.
