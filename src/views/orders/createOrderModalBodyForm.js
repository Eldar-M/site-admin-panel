import {createDiv, createForm, createTextInputElement, createOptionElement, createSelectElement} from '../createElements'
import fetchCustomers from '../../models/customers/fetchCustomers'
import fetchProducts from '../../models/products/fetchProducts'

export default function createOrderModalBodyForm() {
  const form = createForm()

  const customerInputDiv = createDiv('mb-3')
  const select = createSelectElement('form-select customerInput')
  const customerOption = createOptionElement('customer', 'Customer...')
  select.append(customerOption)

  fetchCustomers()
  .then(data => {
    const customers = data
    select.append(...customers.map(customer => createOptionElement(customer.id, `${customer.firstName +' '+ customer.lastName +' '+ '('+ customer.company +')'}`)))
  })
  customerInputDiv.append(select)

  const productInputDiv = createDiv('mb-3')
  const selectProduct = createSelectElement('form-select productInput')
  const productOption = createOptionElement('product', 'Product...')
  selectProduct.append(productOption)

  fetchProducts()
  .then(data => {
    const products = data
    selectProduct.append(...products.map(product => createOptionElement(product.id, `${product.productName +' '+ product.specification}`)))
    products.map(product => {
      selectProduct.addEventListener('change', () => {
        if(selectProduct.value === product.id){
          amountInputElement.addEventListener('input', () => {
            totalInputElement.value = `${amountInputElement.value * product.price}`
          })
          totalInputElement.value = `${amountInputElement.value * product.price}`
        }
      })
    })
  })

  productInputDiv.append(selectProduct)

  const amountInputDiv = createDiv('mb-3')
  const amountInputElement = createTextInputElement('Amount', 'form-control amountInput')
  amountInputDiv.append(amountInputElement)

  const totalInputDiv = createDiv('mb-3')
  const totalInputElement = createTextInputElement('Total', 'form-control totalInput')
  totalInputDiv.append(totalInputElement)

  form.append(customerInputDiv, productInputDiv, amountInputDiv, totalInputDiv)

  return form
}