import addModalToBody from "./addModalToBody"
import openModal from "./openModal"
import createCustomerModalBodyForm from "./createCustomerModalBodyForm"

export default function addCustomerModalToBody(callback) {
    const form = createCustomerModalBodyForm()

    addModalToBody('New Customer', form, callback)

    openModal()
}