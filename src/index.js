import 'bootstrap/dist/css/bootstrap.min.css'
import './style/style.css'

import onCustomersCardClick from './controllers/customers/onCustomersCardClick'
import onProductsCardClick from './controllers/products/onProductsCardClick'
import onOrdersCardClick from './controllers/orders/onOrdersCardClick'

const customersButton = document.querySelector('.customers')
const productsButton = document.querySelector('.products')
const ordersButton = document.querySelector('.orders')

customersButton.addEventListener('click', onCustomersCardClick)

productsButton.addEventListener('click', onProductsCardClick)

ordersButton.addEventListener('click', onOrdersCardClick)