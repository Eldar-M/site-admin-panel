import { createDiv } from './createElements'

export default function openModal() {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    const modalDivShow = createDiv('modal-backdrop fade show')

    modal.className = 'modal fade show'
    modal.setAttribute('style', 'display: block;')
    modal.setAttribute('role', 'dialog')
    modal.removeAttribute('aria-hidden')
    modal.setAttribute('aria-modal', 'true')
    body.className = 'modal-open'
    body.setAttribute('style', 'overflow: hidden; padding-right: 17px;')
    body.append(modalDivShow)
}