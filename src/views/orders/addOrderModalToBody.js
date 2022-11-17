import addModalToBody from "../modal/addModalToBody"
import openModal from "../modal/openModal"
import createOrderModalBodyForm from "./createOrderModalBodyForm"
import createOrderForm from "./createOrderForm.js"

export default function addOrderModalToBody(customers, products, callback) {
    const form = createOrderForm(customers, products)

    addModalToBody('New order', form, callback)

    openModal()
}