import 'bootstrap/dist/css/bootstrap.min.css'
import './style/style.css'

import createCustomersTable from './moduls/createCustomersTable'
import createProductsTable from './moduls/createProductsTable'
import onCustomersLoaded from './moduls/onCustomersLoaded'
import onProductLoaded from './moduls/onProductsLoaded'
import addCustomerModalToBody from './moduls/addCustomerModalToBody'
import addProductModalToBody from './moduls/addProductModalToBody'
import addNewCustomer from './moduls/addNewCustomer'
import addNewProduct from './moduls/addNewProduct'

const customersButton = document.querySelector('.customers')
const productsButton = document.querySelector('.products')

customersButton.addEventListener('click', function() {
    onCustomersLoaded()

    const customersCard = document.querySelector('.card')

    customersCard.replaceWith(createCustomersTable((onNewCustomerCreate) => {
        addCustomerModalToBody(() => {
            addNewCustomer(onNewCustomerCreate)
        })
    }))
})

productsButton.addEventListener('click', function() {
    onProductLoaded()

    const productsCard = document.querySelector('.card')

    productsCard.replaceWith(createProductsTable((onNewProductCreate) => {
        addProductModalToBody(() => {
            addNewProduct(onNewProductCreate)
        })
    }))
})