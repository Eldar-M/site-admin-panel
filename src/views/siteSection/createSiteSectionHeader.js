import { createDiv, createHeader, createButtonElement } from '../createElements.js'

export default function createSiteSectionHeader(head, onNewElementAddClick) {
    const sectionHeader = createDiv('row')
    const headerDiv = createDiv('col-sm-10')
    const header = createHeader('h3', head)
    const buttonDiv = createDiv('col-sm-2 text-end')
    const addButton = createButtonElement('button', 'btn btn-outline-success', '+ Add new')

    addButton.addEventListener('click', onNewElementAddClick)

    headerDiv.append(header)

    buttonDiv.append(addButton)
    sectionHeader.append(headerDiv, buttonDiv)

    return sectionHeader
}