import {createDiv} from './createElements'
import createModalFadeDiv from './createModalFadeDiv'
import createModalHeader from './createModalHeader'
import createModalBody from './createModalBody'
import createModalFooter from './createModalFooter'

export default function createModal(modalTitle, bodyForm, callback) {
    const modal = createModalFadeDiv()

    const dialog = createDiv('modal-dialog')
    const content = createDiv('modal-content')

    const header = createModalHeader(modalTitle)

    const body = createModalBody(bodyForm)

    const footer = createModalFooter(callback)

    content.append(header, body, footer)
    dialog.append(content)
    modal.append(dialog)

    return modal
}