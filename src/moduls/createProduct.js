import { createA, createElement, createTh, createTd } from './createElements.js'
import sendRequest from './sendRequest.js'
import { productsURL } from './apiURLs.js'

export default function createProduct(product) {
    const productRow = createElement('tr')

    const number = createTh(product.number)
    const productName = createTd(product.productName)
    const specification = createTd(product.specification)
    const price = createTd(product.price)

    const action = createElement('td')
    const editButton = createA('btn btn-outline-primary edit', 'Edit')
    const deleteButton = createA('btn btn-outline-danger delete', 'Delete')

    action.append(editButton, deleteButton)
    productRow.append(number, productName, specification, price, action)

    deleteButton.addEventListener('click', () => { 
        productRow.remove()

        sendRequest('DELETE', productsURL, product)
    })

    return productRow
}