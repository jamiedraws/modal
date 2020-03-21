# JavaScript

## Overview

Modal's visibility states can be managed through a small JavaScript object API supporting methods to show the modal, hide the modal or change the text within the modal.

## Interface

A modal can receive support from the JavaScript API by providing an object containing the required properties `modal`, `text` and `stateClass` into the `modal` function. Each of the required properties will be accessed from the API's enumerable methods. The API will be returned from the `modal` function, which can be assigned to a variable to utilize with.

```js
const m = modal({
    modal: {
        value: document.querySelector(".modal")
    },
    text: {
        value: document.querySelector(".modal__text")
    },
    stateClass: {
        value: "modal--is-visible"
    }
});
```

| Property     | Description                                                                             | Example                                  |
| ------------ | --------------------------------------------------------------------------------------- | ---------------------------------------- |
| `modal`      | This represents the HTML node that serves as the modal container.                       | `document.querySelector(".modal")`       |
| `text`       | This represents the HTML node that serves as the modal's text container.                | `document.querySelector(".modal__text")` |
| `stateClass` | This represents the `string` CSS class name that will add the modal's visibility state. | `modal--is-visible`                      |

## API (Enumerable Methods)

The modal API is assigned as the prototype of the initialization object properties and is returned from the `modal` function.

When the `modal` function's invocation is assigned to a variable, the API can be accessed from that variable.

| Property  | Description                                                                                                                   | Example                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `show`    | This adds the CSS `stateClass` to the `modal` HTML element.                                                                   | `m.show();`                 |
| `hide`    | This removes the CSS `stateClass` from the `modal` HTML element.                                                              | `m.hide();`                 |
| `message` | This accesses the `text` modal HTML's text container and updates the element's `textContent` value with a `string` parameter. | `m.message("Hello World");` |
