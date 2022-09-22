import { createTextInputElement, createA, createElement, createTr } from './createElements.js'

export default function createInputLineForAddingNewCustomer() {
    const inputsRow = createTr('inputsRowCustomer')

    const cellForNumberInput = createElement('td')
    const cellForFirstNameInput = createElement('td')
    const cellForLastNameInput = createElement('td')
    const cellForCompanyInput = createElement('td')
    

    const numberInput = createTextInputElement('Number', 'number')
    const firstNameInput = createTextInputElement('First Name', 'fname')
    const lastNameInput = createTextInputElement('Last Name', 'lname')
    const compynyInput = createTextInputElement('Company', 'tdcompany')

    cellForNumberInput.append(numberInput)
    cellForFirstNameInput.append(firstNameInput)
    cellForLastNameInput.append(lastNameInput)
    cellForCompanyInput.append(compynyInput)

    const action = createElement('td')
    const addButton = createA('btn btn-outline-success add', 'Add')
    const deleteButton = createA('btn btn-outline-danger delete', 'Delete')

    action.append(addButton, deleteButton)
    inputsRow.append(cellForNumberInput, cellForFirstNameInput, cellForLastNameInput, cellForCompanyInput, action)

    return inputsRow
}