import { createA, createElement, createTh, createTd } from '../createElements.js'
import sendRequest from '../../model/sendRequest'
import { customersURL } from '../apiURLs.js'

export default function createCustomer(customer) {
    const customerRow = createElement('tr')

    const number = createTh(customer.number)
    const firstName = createTd(customer.firstName)
    const lastName = createTd(customer.lastName)
    const company = createTd(customer.company)

    const action = createElement('td')
    const editButton = createA('btn btn-outline-primary edit', 'Edit')
    const deleteButton = createA('btn btn-outline-danger delete', 'Delete')

    action.append(editButton, deleteButton)
    customerRow.append(number, firstName, lastName, company, action)

    deleteButton.addEventListener('click', () => { 
        customerRow.remove()

        sendRequest('DELETE', customersURL, customer)
    })

    return customerRow
}