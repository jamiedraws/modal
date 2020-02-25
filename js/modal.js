(function (global) {
    const utils = Object.defineProperties({}, {
        show: {
            value: function () {
                this.modal.classList.add(this.stateClass);
            }
        },
        hide: {
            value: function () {
                this.modal.classList.remove(this.stateClass);
            }
        },
        message: {
            value: function (message) {
                this.text.textContent = message;
            }
        }
    });

    /**
     * creates a new object using "props" as the top level properties
     * and modal methods as the prototype
     * @param {object} props contains property descriptors for keys:
     * modal (HTML node), stateClass (string CSS classname) and text (HTML node)
     * @return {object} api that can access methods: show, hide and message
     */
    const modal = function (props) {
        const api = Object.create(utils, props);
        return Object.freeze(api);
    };

    if (typeof global.modal !== "object") {
        Object.defineProperty(global, "modal", {
            value: modal
        });
        Object.freeze(global.modal);
    }
}(window));