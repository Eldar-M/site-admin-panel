import fetchOrders from '../../models/orders/fetchOrders'
import OrdersController from './OrdersController'

export default function onOrdersCardClick() {
  const card = document.querySelector('.card')

  fetchOrders()
    .then(data => {
      const ordersController = new OrdersController(data)

      ordersController.elementReplace(card)
    })
}