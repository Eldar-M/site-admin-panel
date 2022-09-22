import {createDiv, createHeader, createForm, createTextInputElement, createButtonElement} from './createElements'
import closeModal from './closeModal'

export default function createModal(modalTitle, firstInput, secondInput, thirdInput, fourthInput, callback) {
    const modal = createDiv('modal fade')
    modal.id = 'exampleModal'
    modal.setAttribute('tabindex', '-1')
    modal.setAttribute('aria-labelledby', 'exampleModalLabel')
    modal.setAttribute('aria-hidden', 'true')
    modal.setAttribute('style', 'display: none;')

    const dialog = createDiv('modal-dialog')
    const content = createDiv('modal-content')

    const header = createDiv('modal-header')
    const title = createHeader('h5', modalTitle)
    title.id = 'exampleModalLabel'
    title.className = 'modal-title'
    const button = createButtonElement('button', 'btn-close', '')
    button.setAttribute('data-bs-dismiss', 'modal')
    button.setAttribute('aria-label', 'Close')

    const body = createDiv('modal-body')
    const form = createForm()
    const firstInputDiv = createDiv('mb-3')
    const firstInputElement = createTextInputElement(firstInput, 'form-control firstInput')
    const secondInputDiv = createDiv('mb-3')
    const secondInputElement = createTextInputElement(secondInput, 'form-control secondInput')
    const thirdInputDiv = createDiv('mb-3')
    const thirdInputElement = createTextInputElement(thirdInput, 'form-control thirdInput')
    const fourthInputDiv = createDiv('mb-3')
    const fourthInputElement = createTextInputElement(fourthInput, 'form-control fourthInput')

    const footer = createDiv('modal-footer')
    const add = createButtonElement('button', 'btn btn-primary add', 'Add')
    const close = createButtonElement('button', 'btn btn-secondary close', 'Close')
    close.setAttribute('data-bs-dismiss', 'modal')

    add.addEventListener('click', callback)
    button.addEventListener('click', closeModal)
    close.addEventListener('click', closeModal)

    header.append(title, button)

    firstInputDiv.append(firstInputElement)
    secondInputDiv.append(secondInputElement)
    thirdInputDiv.append(thirdInputElement)
    fourthInputDiv.append(fourthInputElement)
    form.append(firstInputDiv, secondInputDiv, thirdInputDiv, fourthInputDiv)
    body.append(form)

    footer.append(close, add)

    content.append(header, body, footer)
    dialog.append(content)
    modal.append(dialog)

    return modal
}