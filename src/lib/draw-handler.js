export function outDraw(node) {
    let wasClicked = false;

    const handleDown = (event) => {
        if (!node.contains(event.target)) {
            wasClicked = true;
        } else {
            node.dispatchEvent(new CustomEvent("paint"));
        }
    };

    const handleUp = (event) => {
        wasClicked = false;
    };

    const dispatch = (event) => {
        if (wasClicked) {
            node.dispatchEvent(new CustomEvent("paint"));
        }
    };

    node.addEventListener("mouseover", dispatch);
    document.addEventListener("mousedown", handleDown, true);
    document.addEventListener("mouseup", handleUp, true);

    return {
        destroy() {
            node.removeEventListener("mouseover", dispatch);
            document.removeEventListener("mousedown", handleDown, true);
            document.removeEventListener("mouseup", handleUp, true);
        },
    };
}
