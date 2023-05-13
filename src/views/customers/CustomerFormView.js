import { createDiv, createForm } from "../createElements"
import createNewCustomer from "./createNewCustomer"
import createInputDiv from "./createInputDiv"

export default class CustomerFormView extends EventTarget {
  constructor(){
    super()
    this.form = createForm('form-customer')
    this.firstName = createInputDiv('First Name', 'form-control firstNameInput', 'firstName')
    this.lastName = createInputDiv('Last Name', 'form-control lastNameInput', 'lastName')
    this.company = createInputDiv('Company', 'form-control companyInput', 'company')
    this.customerForm = this.createCustomerForm()
  }

  showErrors(errors){
    for (let key in errors){
      if(this[key].firstChild.nextSibling === null){
        this[key].firstChild.after(this.getInvalidDiv(errors[key]))
      }
      this[key].firstChild.classList.remove('valid')
      this[key].firstChild.classList.add('invalid')
    }
  }

  deleteErrors(fieldName){
    if(this[fieldName].firstChild.nextSibling !== null){
      this[fieldName].firstChild.nextSibling.remove()
    }
  }

  showValid(fieldName){
    this[fieldName].firstChild.classList.add('valid')
  }

  createCustomerForm(){
    const customerForm = this.form
    customerForm.append(this.firstName, this.lastName, this.company)

    customerForm.addEventListener('focus', function(e){
      if(e.target.classList.contains('form-control')){
        e.target.classList.remove('invalid')
      }
    }, true)
  
    customerForm.addEventListener('blur', (e) => {
      const event = new Event('validate')
      event.data = {
        name: e.target.name,
        value: e.target.value
      }
      this.dispatchEvent(event)
    }, true)

    customerForm.addEventListener('input', (e) => {
      const event = new Event('validate')
      event.data = {
        name: e.target.name,
        value: e.target.value
      }
      this.dispatchEvent(event)
    }, true)

    return customerForm
  }

  clearForm(){
    const inputs = document.querySelectorAll('.form-control')
    inputs.forEach(input => {
      input.value = ''
      input.classList.remove('invalid', 'valid')
    })
    const inValids = document.querySelectorAll('.invalid-feedback')
    inValids.forEach(inValid => inValid.remove())
  }

  getForm(){
    return this.customerForm
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

  getNewCustomer(){
    const customer = createNewCustomer()
    return customer
  }
}