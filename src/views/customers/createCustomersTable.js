import { createDiv } from '../createElements.js'
import createCustomerTableHeader from './createCustomerTableHeader.js'
import createCustomerTableBody from './createCustomerTableBody.js'
import createCustomer from './createCustomer.js'

export default function createCustomersTable(customers, onNewCustomerAdd) {
    const card = createDiv('card')
    const cardHeader = createDiv('card-header')
    const cardBody = createDiv('card-body')

    const header = createCustomerTableHeader(() => {
        onNewCustomerAdd((customer) => {
            const customerElement = createCustomer(customer)
            const container = document.querySelector('.tbodyCustomers')
            container.append(customerElement)
        })
    })
    const table = createCustomerTableBody(customers)

    cardHeader.append(header)
    cardBody.append(table)

    card.append(cardHeader, cardBody)

    return card
}