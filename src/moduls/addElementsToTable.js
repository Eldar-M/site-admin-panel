export default function addElementsToTable(elements, container) {
    const table = document.querySelector(container);
    table.append(...elements);
};