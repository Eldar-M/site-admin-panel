import addModalToBody from "../modal/addModalToBody"
import openModal from "../modal/openModal"
import createCustomerModalBodyForm from "./createCustomerModalBodyForm"

export default function addCustomerModalToBody(callback) {
    const form = createCustomerModalBodyForm()

    addModalToBody('New Customer', form, callback)

    openModal()
}