import addModalToBody from "../modal/addModalToBody"
import openModal from "../modal/openModal"
import createCustomerModalBodyForm from "./createCustomerModalBodyForm"

export default function addCustomerModalToBody(form, callback) {
    // const form = createCustomerModalBodyForm(callback)

    addModalToBody('New Customer', form, callback)

    openModal()
}