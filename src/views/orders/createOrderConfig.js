import { createActionElement } from '../createElements.js'

export default function createOrderConfig(callback) {
  const orderConfig = {
    headerName: 'Order',
    columnName: ['Customer', 'Product', 'Amount', 'Total ($)', 'Action'],
    rowCellCreators: [
      function createCustomerCell(order) {
        return order.customer.firstName + ' ' + order.customer.lastName + ' ' + '(' + order.customer.company + ')'
      },
      function createProductCell(order) {
        return order.product.productName + ' ' + order.product.specification
      },
      function createAmountCell(order) {
        return order.amount
      },
      function createTotalCell(order) {
        return order.product.price * order.amount
      },
      function createActionCell(order, onDelete) {
        
        const action = createActionElement(callback, order, onDelete)

        return action
      },
    ],
  }

  return orderConfig
}