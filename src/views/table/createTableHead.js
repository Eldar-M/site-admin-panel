import { createThead, createElement, createTh } from '../createElements.js'

export default function createTableHead(columnNames) {
  const tableHead = createThead('table-light')
  const tableHeadRow = createElement('tr')

  tableHeadRow.append(...columnNames.map(columnHeader =>{
      return createTh(columnHeader)
  }))

  tableHead.append(tableHeadRow)

  return tableHead
}