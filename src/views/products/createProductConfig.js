import { createActionElement } from '../createElements.js'

export default function createProductConfig(callback) {
  const productConfig = {
    url: 'http://localhost:3000/products',
    headerName: 'Product',
    columnName: ['Product Name', 'Specification', 'Price ($)', 'Action'],
    rowCellCreators: [
      function createProductNameCell(product) {
        return product.productName
      },
      function createSpecificationCell(product) {
        return product.specification
      },
      function createPriceCell(product) {
        return product.price
      },
      function createActionCell(product, onDelete) {
        
        const action = createActionElement(callback, product, onDelete)

        return action
      },
    ],
  }

  return productConfig
}