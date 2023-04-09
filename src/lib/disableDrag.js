export function disableDrag(node) {
    node.ondragstart = () => {
        return false;
    };
}
