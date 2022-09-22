import addModalToBody from "./addModalToBody"
import openModal from "./openModal"
import addNewProductToTable from "./addNewProductToTable"

export default function addProductModalToBody() {
    addModalToBody(['New product', 'Number', 'Product Name', 'Specification', 'Price'])

    openModal()

    const addButton = document.querySelector('.add')

    addButton.addEventListener('click', addNewProductToTable)
}