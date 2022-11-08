import { createTable, createTbody, createThead, createElement, createTh } from '../createElements.js'
import createCustomer from './createCustomer.js'

export default function createCustomerTableBody(customers) {
    const table = createTable('table table-bordered table-hoover')
    const tableHead = createThead('table-light')
    const tableBody = createTbody('tbodyCustomers')
    const tableRowHead = createElement('tr')
    
    const tableHeadFirstColumn = createTh('#')
    const tableHeadSecondColumn = createTh('First Name')
    const tableHeadThirdColumn = createTh('Last Name')
    const tableHeadFourthColumn = createTh('Company')
    const tableHeadAction = createTh('Action')

    customers.map(customer => tableBody.append(createCustomer(customer)))

    tableRowHead.append(tableHeadFirstColumn, tableHeadSecondColumn, tableHeadThirdColumn, tableHeadFourthColumn, tableHeadAction)
    tableHead.append(tableRowHead)
    table.append(tableHead, tableBody)

    return table
}