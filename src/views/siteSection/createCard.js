import { createDiv } from '../createElements.js'

export default function createCard(header, table) {
    const card = createDiv('card')
    const cardHeader = createDiv('card-header')
    const cardBody = createDiv('card-body')
    
    cardHeader.append(header)
    cardBody.append(table)
    
    card.append(cardHeader, cardBody)

    return card
}