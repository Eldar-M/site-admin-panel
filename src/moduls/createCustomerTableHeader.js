import { createDiv, createHeader, createButtonElement } from './createElements.js'

export default function createCustomerTableHeader(onNewCustomerAddClick) {
    const tableHeader = createDiv('row')
    const headerDiv = createDiv('col-sm-10')
    const header = createHeader('h3', 'Customer')
    const buttonDiv = createDiv('col-sm-2 text-end')
    const addButton = createButtonElement('button', 'btn btn-outline-success', '+ Add new')

    addButton.addEventListener('click', onNewCustomerAddClick)

    headerDiv.append(header)
    
    buttonDiv.append(addButton)
    tableHeader.append(headerDiv, buttonDiv)

    return tableHeader
}