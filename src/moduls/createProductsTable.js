import { createDiv } from './createElements.js'
import createProductTableHeader from './createProductTableHeader.js'
import creatingTableBody from './creatingTableBody.js'
import createProduct from './createProduct.js'

export default function createProductsTable(onNewProductAdd) {
    const card = createDiv('card')
    const cardHeader = createDiv('card-header')
    const cardBody = createDiv('card-body')

    const header = createProductTableHeader(() => {
        onNewProductAdd((product) => {
            const productElement = createProduct(product)
            const container = document.querySelector('.tbodyProducts')
            container.append(productElement)
        })
    })
    const table = creatingTableBody('tbodyProducts', '#', 'Product Name', 'Specification', 'Price')
    
    cardHeader.append(header)
    cardBody.append(table)
    
    card.append(cardHeader, cardBody)

    return card
}