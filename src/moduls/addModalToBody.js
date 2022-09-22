import createModal from './createModal'

export default function addModalToBody(array, callback) {
    const body = document.querySelector('body')

    body.append(createModal(...array, callback))
}