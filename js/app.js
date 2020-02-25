(function(global) {
    // set up modal
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

    const form = document.getElementById("modalForm"),
        text = document.getElementById("modalText"),
        hide = document.getElementById("hideModal");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        m.message(text.value);
        m.show();
    });

    hide.addEventListener("click", m.hide.bind(m));
})(window);
