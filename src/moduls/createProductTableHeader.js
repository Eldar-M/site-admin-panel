import { createDiv, createHeader, createButtonElement } from './createElements.js'
import addProductModalToBody from './addProductModalToBody.js'

export default function createProductTableHeader() {
    const tableHeader = createDiv('row')
    const headerDiv = createDiv('col-sm-10')
    const header = createHeader('h3', 'Product')
    const buttonDiv = createDiv('col-sm-2 text-end')
    const addButton = createButtonElement('button', 'btn btn-outline-success', '+ Add new')

    addButton.addEventListener('click', addProductModalToBody)

    headerDiv.append(header)
    buttonDiv.append(addButton)
    tableHeader.append(headerDiv, buttonDiv)

    return tableHeader
}