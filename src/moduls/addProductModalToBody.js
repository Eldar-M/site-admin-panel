import addModalToBody from "./addModalToBody"
import openModal from "./openModal"
import createProductModalBodyForm from "./createProductModalBodyForm"

export default function addProductModalToBody(callback) {
    const form = createProductModalBodyForm()

    addModalToBody('New Product', form, callback)

    openModal()
}