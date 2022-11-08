import { createTableElement } from '../createElements.js'
import createTableHead from './createTableHead.js'
import createTableBody from './createTableBody.js'

export default function createTable(config) {
    const table = createTableElement('table table-bordered table-hoover')

    const tableHead = createTableHead(config.columnName)
    const tableBody = createTableBody(config)

    table.append(tableHead, tableBody)

    return table
}