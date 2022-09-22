import { createDiv } from './createElements.js'
import createCustomerTableHeader from './createCustomerTableHeader.js'
import creatingTableBody from './creatingTableBody.js'
import createCustomer from './createCustomer.js'

export default function createCustomersTable(callback) {
    const card = createDiv('card')
    const cardHeader = createDiv('card-header')
    const cardBody = createDiv('card-body')

    const header = createCustomerTableHeader(() => {
        callback((customer) => {
            const customerElement = createCustomer(customer)
            const container = document.querySelector('.tbodyCustomers')
            container.append(customerElement)
        })
    })
    const table = creatingTableBody('tbodyCustomers', '#', 'First Name', 'Last Name', 'Company')

    cardHeader.append(header)
    cardBody.append(table)

    card.append(cardHeader, cardBody)

    return card
}