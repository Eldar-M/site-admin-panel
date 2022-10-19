import createModal from './createModal'

export default function addModalToBody(modalTitle, bodyForm, callback) {
    const body = document.querySelector('body')

    body.append(createModal(modalTitle, bodyForm, callback))
}