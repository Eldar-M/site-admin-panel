import { createDiv } from './createElements.js'
import createProductTableHeader from './createProductTableHeader.js'
import creatingTableBody from './creatingTableBody.js'

export default function createProductsTable() {
    const card = createDiv('card')
    const cardHeader = createDiv('card-header')
    const cardBody = createDiv('card-body')

    const header = createProductTableHeader()
    const table = creatingTableBody('tbodyProducts', '#', 'Product Name', 'Specification', 'Price')
    
    cardHeader.append(header)
    cardBody.append(table)
    
    card.append(cardHeader, cardBody)

    return card
}