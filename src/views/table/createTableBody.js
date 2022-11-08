import createTableRow from './createTableRow.js'
import { createTbody } from '../createElements.js'

export default function createTableBody(config) {
  const tableBody = createTbody('tbody')

  tableBody.append(...config.data.map(element => {
    return createTableRow(config, element)
  }))

  return tableBody
}