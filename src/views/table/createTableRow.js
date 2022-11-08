import { createElement } from '../createElements.js'

export default function createTableRow(config, element) {
    const tableRow = createElement('tr')

    const onDelete = () => {
        // tableRow.remove()
    }

    tableRow.append(...config.rowCellCreators.map(fn => {
        return createElement('td', fn(element, onDelete))
    }))

    return tableRow
}