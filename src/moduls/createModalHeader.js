import {createDiv, createHeader, createButtonElement} from './createElements'
import closeModal from './closeModal'

export default function createModalHeader(modalTitle) {
  const header = createDiv('modal-header')
  const title = createHeader('h5', modalTitle)
  title.id = 'exampleModalLabel'
  title.className = 'modal-title'
  const button = createButtonElement('button', 'btn-close', '')
  button.setAttribute('data-bs-dismiss', 'modal')
  button.setAttribute('aria-label', 'Close')

  button.addEventListener('click', closeModal)

  header.append(title, button)

  return header
}