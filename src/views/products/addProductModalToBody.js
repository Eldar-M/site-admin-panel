import addModalToBody from "../modal/addModalToBody"
import openModal from "../modal/openModal"
import createProductModalBodyForm from "./createProductModalBodyForm"

export default function addProductModalToBody(callback) {
    const form = createProductModalBodyForm()

    addModalToBody('New Product', form, callback)

    openModal()
}