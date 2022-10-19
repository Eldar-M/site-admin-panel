import addModalToBody from "./addModalToBody"
import openModal from "./openModal"

export default function addProductModalToBody(callback) {
    
    addModalToBody(['New product', 'Number', 'Product Name', 'Specification', 'Price'], callback)

    openModal()
}