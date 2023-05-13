import { createDiv, createForm } from "../createElements"
import createNewOrder from "./createNewOrder"
import SelectView from "../common/SelectView"
import InputView from "../common/InputView"

import createCustomerOption from "./createCustomerOption"
import createProductOption from "./createProductOption"

export default class OrderFormView extends EventTarget {
  constructor(){
    super()
    this.form = createForm('form-order')

    this.customer = new SelectView('form-select customerInput', 'customer', 'Customer...')
    this.product = new SelectView('form-select productInput', 'product', 'Product...')
    this.amount = new InputView('Amount', 'form-control amountInput', 'amount')
    this.total = createDiv('mb-3 text-end')

    this.orderForm = this.createOrderForm()
  }

  getProduct(){
    return this.product.getValue()
  }

  getAmount(){
    return this.amount.getValue()
  }

  updateTotal(text){
    this.total.innerText = `Total: ${text}`
  }

  appendNewOptionsToCustomer(customers){
    const options = createCustomerOption(customers)
    this.customer.appendNewOptions(options)
  }

  appendNewOptionsToProduct(products){
    const options = createProductOption(products)
    this.product.appendNewOptions(options)
  }

  showErrors(errors){
    for (let key in errors){
      if(this[key].getDiv().firstChild.nextSibling === null){
        this[key].getDiv().firstChild.after(this.getInvalidDiv(errors[key]))
      }
      this[key].getDiv().firstChild.classList.remove('valid')
      this[key].getDiv().firstChild.classList.add('invalid')
    }
  }

  deleteErrors(fieldName){
    if(this[fieldName].getDiv().firstChild.nextSibling !== null){
      this[fieldName].getDiv().firstChild.nextSibling.remove()
    }
  }

  showValid(fieldName){
    this[fieldName].getDiv().firstChild.classList.add('valid')
  }

  createOrderForm(){
    const orderForm = this.form

    orderForm.append(this.customer.getDiv(), this.product.getDiv(), this.amount.getDiv(), this.total)

    orderForm.addEventListener('focus', function(e){
      if(e.target.classList.contains('form-control')){
        e.target.classList.remove('invalid')
      }
    }, true)
  
    orderForm.addEventListener('blur', (e) => {
      const event = new Event('validate')
      event.data = {
        name: e.target.name,
        value: e.target.value
      }
      this.dispatchEvent(event)
    }, true)

    this.product.select.addEventListener('change', (e) => {
      const event = new Event('total')
      event.data = {
        name: e.target.name,
        value: e.target.value
      }
      this.dispatchEvent(event)
    }, true)

    this.amount.input.addEventListener('input', (e) => {
      const event = new Event('total')
      event.data = {
        name: e.target.name,
        value: e.target.value
      }
      this.dispatchEvent(event)
    }, true)

    return orderForm
  }

  clearForm(){
    const inputs = document.querySelectorAll('.form-control')
    inputs.forEach(input => {
      input.value = ''
      input.classList.remove('invalid', 'valid')
    })
    const inValids = document.querySelectorAll('.invalid-feedback')
    inValids.forEach(inValid => inValid.remove())
    const selects = document.querySelectorAll('.form-select')
    selects.forEach(select => {
      select.options.selectedIndex = 0
      select.classList.remove('invalid', 'valid')
    })
    this.total.innerText = ''
  }

  getForm(){
    return this.orderForm
  }

  getValidDiv(){
    const validDiv = createDiv('valid-feedback')
    validDiv.innerText = 'Good looks!'
    return validDiv
  }

  getInvalidDiv(innerText){
    const invalidDiv = createDiv('invalid-feedback')
    invalidDiv.innerText = innerText
    return invalidDiv
  }

  getNewOrder(){
    const order = createNewOrder()
    return order
  }
}