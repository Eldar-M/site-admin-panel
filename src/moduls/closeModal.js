export default function closeModal() {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    const modalDivShow = document.querySelector('.modal-backdrop')

    body.removeAttribute('class')
    body.removeAttribute('style')
    modal.remove()
    modalDivShow.remove()
}