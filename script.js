(() => {

    const state = {
        invert: 60,
        sepia: 100,
        hueRotate: 0,
        saturate: 100
    };

    const img = document.querySelector(".target-img");

    function updateCSS(state) {
        const i = state.invert;
        const s = state.sepia;
        const h = state.hueRotate;
        const sa = state.saturate;
        img.style.filter = `invert(${i}%) sepia(${s}%) hue-rotate(${h}deg) saturate(${sa}%)`;
    }
    updateCSS(state);

    function onInput(selectorStr) {
        const value = document.querySelector(`.${selectorStr} .value span`);
        const inputElem = document.querySelector(`.${selectorStr} input`);

        inputElem.addEventListener(
            "input", 
            (e) => {
                value.innerHTML = e.target.value;
                state[selectorStr] = e.target.value;
                updateCSS(state);
            }
        );
    }

    onInput("invert");
    onInput("sepia");
    onInput("hueRotate");
    onInput("saturate");

})();