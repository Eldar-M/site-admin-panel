import {createDiv, createButtonElement} from './createElements'
import closeModal from './closeModal'

export default function createModalFooter(callback) {
  const footer = createDiv('modal-footer')
  const add = createButtonElement('button', 'btn btn-primary add', 'Add')
  const close = createButtonElement('button', 'btn btn-secondary close', 'Close')
  close.setAttribute('data-bs-dismiss', 'modal')

  add.addEventListener('click', callback)
  close.addEventListener('click', closeModal)

  footer.append(close, add)

  return footer
}