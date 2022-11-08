import { createDiv } from '../createElements.js'
import createSiteSectionHeader from './createSiteSectionHeader.js'
import createTable from '../table/createTable.js'
import createTableRow from '../table/createTableRow.js'

export default function createSiteSection(config, onNewElementAdd) {
    const card = createDiv('card')
    const cardHeader = createDiv('card-header')
    const cardBody = createDiv('card-body')

    const header = createSiteSectionHeader(config.headerName, () => {
        onNewElementAdd((serverData) => {
            const element = createTableRow(config, serverData)
            const container = document.querySelector('.tbody')
            container.append(element)
        })
    })
    const table = createTable(config)
    
    cardHeader.append(header)
    cardBody.append(table)
    
    card.append(cardHeader, cardBody)

    return card
}