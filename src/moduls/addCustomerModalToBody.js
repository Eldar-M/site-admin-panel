import addModalToBody from "./addModalToBody"
import openModal from "./openModal"

export default function addCustomerModalToBody(callback) {
    addModalToBody(['New Customer', 'Number', 'First Name', 'Last Name', 'Company'], callback)

    openModal()
}