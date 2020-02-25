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
    pointer-events: all;
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
