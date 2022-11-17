import {createDiv, createForm, createTextInputElement, createOptionElement, createSelectElement} from '../createElements'

export default function createOrderForm(customers, products) {
  const form = createForm()

  const customerInputDiv = createDiv('mb-3')
  const select = createSelectElement('form-select customerInput')
  const customerOption = createOptionElement('customer', 'Customer...')
  select.append(customerOption)
  select.append(...customers.map(customer => createOptionElement(customer.id, `${customer.firstName +' '+ customer.lastName +' '+ '('+ customer.company +')'}`)))
  customerInputDiv.append(select)

  const productInputDiv = createDiv('mb-3')
  const selectProduct = createSelectElement('form-select productInput')
  const productOption = createOptionElement('product', 'Product...')
  selectProduct.append(productOption)
  selectProduct.append(...products.map(product => createOptionElement(product.id, `${product.productName +' '+ product.specification}`)))
  productInputDiv.append(selectProduct)

  const amountInputDiv = createDiv('mb-3')
  const amountInputElement = createTextInputElement('Amount', 'form-control amountInput')
  amountInputDiv.append(amountInputElement)

  const totalInputDiv = createDiv('mb-3 text-end')

  products.map(product => {
    selectProduct.addEventListener('change', () => {
      if(selectProduct.value === product.id){
        amountInputElement.addEventListener('input', () => {
          totalInputDiv.innerText = `Total: ${amountInputElement.value * product.price}`
        })
        totalInputDiv.innerText = `Total: ${amountInputElement.value * product.price}`
      }
    })
  })

  form.append(customerInputDiv, productInputDiv, amountInputDiv, totalInputDiv)

  return form
}