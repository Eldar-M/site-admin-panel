import addModalToBody from "../modal/addModalToBody"
import openModal from "../modal/openModal"
import createOrderForm from "./createOrderForm.js"

export default function addOrderModalToBody(form, callback) {
    // const form = createOrderForm(customers, products)

    addModalToBody('New order', form, callback)

    openModal()
}