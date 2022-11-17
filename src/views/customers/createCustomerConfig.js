import { createActionElement } from '../createElements.js'

export default function createCustomerConfig(callback) {
  const customerConfig = {
    url: 'http://localhost:3000/customers',
    headerName: 'Customer',
    columnName: ['First Name', 'Last Name', 'Company', 'Action'],
    rowCellCreators: [
      function createFirstNameCell(customer) {
        return customer.firstName
      },
      function createLastNameCell(customer) {
        return customer.lastName
      },
      function createCompanyCell(customer) {
        return customer.company
      },
      function createActionCell(customer, onDelete) {
        
        const action = createActionElement(callback, customer, onDelete)

        return action
      },
    ],
  }

  return customerConfig
}