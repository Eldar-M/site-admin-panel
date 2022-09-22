import { createTable, createTbody, createThead, createElement, createTh } from './createElements.js'

export default function creatingTableBody(classNameForTbody, classNameForFirstColumn, classNameForSecondColumn, classNameForThirdColumn, classNameForFourthColumn) {
    const table = createTable('table table-bordered table-hoover')
    const tableHead = createThead('table-light')
    const tableBody = createTbody(classNameForTbody)
    const tableRowHead = createElement('tr')
    const tableHeadFirstColumn = createTh(classNameForFirstColumn)
    const tableHeadSecondColumn = createTh(classNameForSecondColumn)
    const tableHeadThirdColumn = createTh(classNameForThirdColumn)
    const tableHeadFourthColumn = createTh(classNameForFourthColumn)
    const tableHeadAction = createTh('Action')

    tableRowHead.append(tableHeadFirstColumn, tableHeadSecondColumn, tableHeadThirdColumn, tableHeadFourthColumn, tableHeadAction)
    tableHead.append(tableRowHead)
    table.append(tableHead, tableBody)

    return table
}