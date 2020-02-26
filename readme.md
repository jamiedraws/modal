# Setup

## Overview

Modal, in itself, is simply a layer that is designed to enforce a mental context switch and is a conventional design mechanism for human-computer interaction.

## Priming the Modal's Layer

To create a modal, an HTML element and the following CSS is required to create a new stacking context layer. For instance:

```html
<div class="modal"></div>
```

```css
.modal {
    /* 
    creates stacking context relative to the nearest positioned element
    */
    position: absolute;

    /* 
    zero out the four edges to consume all available white space 
    */
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    /* 
    places layer above the document 
    */
    z-index: 1;
}
```

The above CSS declarations are key to creating a modal. There are two key notes to be mindful of:

1. The `.modal` position must be bound to the root document. If there are ancestor elements that are positioned, the `.modal` will be bound the dimensions of that element instead.
2. The z-index value represents the layer in the stacking context and must be the top layer, or highest value. Ideally, other sibling elements should not have a higher z-index value than the `.modal`.

So far, the HTML and CSS alone creates the modal layer. However, to establish human-computer interaction, the modal must communicate this through a state. In it's simplest nature, the state determines visibility. To control the modal's visibility state in most scenarios, JavaScript is required.

## Managing the Modal's Visibility State

While CSS technology can provide the modal's visibility states, JavaScript will be used to control the modal's states.

Let's begin by declaring these states. Initially, the modal will be invisible until the user performs a certain action where the modal will communicate the reaction of the action.

Since we can assume the initial state is the invisible state, we can include these declarations in the `.modal` class.

### Invisible State

```css
.modal {
    opacity: 0;
    pointer-events: none;
}
```

In a similar pattern, we can declare the visibility state in a separate CSS class name.

### Visible State

```css
.modal--is-visible {
    opacity: 1;
    pointer-events: auto;
}
```

These two CSS classes setup the invisible and visible states of the modal. JavaScript will create the interaction through user actions. Simply, JavaScript would capture the HTML element from the Document Object Model where it can then be referenced when state management is ready.

```js
// capture the HTML element
const modal = document.querySelector(".modal");

// enable the modal's visibile state
modal.classList.add("modal--is-visible");

// disable the modal's visible state
modal.classList.remove("modal--is-visible");
```

Now that all of the ingredients have been added into the recipe, the icing on the cake is simply up to you, the author, and what your intentions are.

This icing serves as the intent for what this Github repository was created to deliver. Feel free to download or clone this repository to give the modal a test run.

## Specification, Documentation & Browser Support

### CSS

Positioning

1. [W3C Recommendation - 9 Visual formatting model / 9.3 Positioning schemes](https://www.w3.org/TR/CSS2/visuren.html#propdef-position)
2. [CSS 2.1 - Browser Support & Global Marketshare](https://caniuse.com/#search=CSS%202.1)
3. [MDN web docs - position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

Pointer-Events

1. [W3C Recommendation - 16 Interactivity / 16.6 The ‘pointer-events’ property](https://www.w3.org/TR/SVG11/interact.html#PointerEventsProperty)
2. [CSS pointer-events (for HTML) - Browser Support & Global Marketshare](https://caniuse.com/#search=pointer%20events)
3. [MDN web docs - pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)

Opacity

1. [W3C Recommendation - 3. Color properties / 3.2. Transparency: the ‘opacity’ property](https://www.w3.org/TR/css-color-3/#transparency)
2. [CSS3 Opacity - Browser Support & Global Marketshare](https://caniuse.com/#search=opacity)
3. [MDN web docs - opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)

Z-Index

1. [W3C Recommendation - 9 Visual formatting model / 9.9.1 Specifying the stack level: the 'z-index' property](https://www.w3.org/TR/CSS2/visuren.html#z-index)
2. [CSS property: z-index - Browser Support & Global Marketshare](https://caniuse.com/#search=z-index)
3. [MDN web docs - z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)

### JavaScript

const

1. [Standard ECMAScript-262 6th Edition / June 2015 - 13.3.1Let and Const Declarations](https://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations)
2. [Const - Browser Support & Global Marketshare](https://caniuse.com/#search=const)
3. [MDN web docs - const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

Element.querySelector

1. [DOM Living Standard Specification](https://dom.spec.whatwg.org/#dom-parentnode-queryselectorall)
2. [querySelector/querySelectorAll - Browser Support & Global Marketshare](https://caniuse.com/#search=queryselector)
3. [MDN web docs Element.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

Element.classList

1. [DOM Living Standard Specification](https://dom.spec.whatwg.org/#dom-element-classlist)
2. [classList (DOMTokenList) - Browser Support & Global Marketshare](https://caniuse.com/#search=classlist)
3. [MDN web docs Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
