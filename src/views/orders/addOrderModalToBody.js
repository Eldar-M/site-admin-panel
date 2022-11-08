import addModalToBody from "../modal/addModalToBody"
import openModal from "../modal/openModal"
import createOrderModalBodyForm from "./createOrderModalBodyForm"

export default function addOrderModalToBody(callback) {
    const form = createOrderModalBodyForm()

    addModalToBody('New order', form, callback)

    openModal()
}