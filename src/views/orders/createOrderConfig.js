import { createActionElement } from '../createElements.js'

export default function createOrderConfig(callback) {
  const orderConfig = {
    headerName: 'Order',
    columnName: ['#', 'Customer', 'Product', 'Amount', 'Total', 'Action'],
    rowCellCreators: [
      function createNumberCell(order) {
        return order.number
      },
      function createCustomerCell(order) {
        return order.customer
      },
      function createProductCell(order) {
        return order.product
      },
      function createAmountCell(order) {
        return order.amount
      },
      function createTotalCell(order) {
        return order.total
      },
      function createActionCell(order, onDelete) {
        
        const action = createActionElement(callback, order, onDelete)

        return action
      },
    ],
  }

  return orderConfig
}