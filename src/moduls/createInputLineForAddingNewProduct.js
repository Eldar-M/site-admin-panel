import { createTextInputElement, createA, createElement, createTr } from './createElements.js'

export default function createInputLineForAddingNewProduct() {
    const inputRow = createTr('inputRowProduct')

    const cellForNumberInput = createElement('td')
    const cellForProductNameInput = createElement('td')
    const cellForSpecificationInput = createElement('td')
    const cellForPriceInput = createElement('td')
    

    const numberInput = createTextInputElement('Number', 'numberProduct')
    const productNameInput = createTextInputElement('Product Name', 'pname')
    const specificationInput = createTextInputElement('Specification', 'specification')
    const priceInput = createTextInputElement('Price', 'price')

    cellForNumberInput.append(numberInput)
    cellForProductNameInput.append(productNameInput)
    cellForSpecificationInput.append(specificationInput)
    cellForPriceInput.append(priceInput)

    const action = createElement('td')
    const addButton = createA('btn btn-outline-success add', 'Add')
    const deleteButton = createA('btn btn-outline-danger delete', 'Delete')

    action.append(addButton, deleteButton)
    inputRow.append(cellForNumberInput, cellForProductNameInput, cellForSpecificationInput, cellForPriceInput, action)

    return inputRow
}