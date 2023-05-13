import { createDiv, createForm } from "../createElements"
import createNewProduct from "./createNewProduct"
import createInputDiv from "./createInputDiv"

export default class ProductFormView extends EventTarget {
  constructor(){
    super()
    this.form = createForm('form-product')
    this.productName = createInputDiv('Product Name', 'form-control productNameInput', 'productName')
    this.specification = createInputDiv('Specification', 'form-control specificationInput', 'specification')
    this.price = createInputDiv('Price', 'form-control priceInput', 'price')
    this.productForm = this.createProductForm()
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

  createProductForm(){
    const productForm = this.form
    productForm.append(this.productName, this.specification, this.price)

    productForm.addEventListener('focus', function(e){
      if(e.target.classList.contains('form-control')){
        e.target.classList.remove('invalid')
      }
    }, true)
  
    productForm.addEventListener('blur', (e) => {
      const event = new Event('validate')
      event.data = {
        name: e.target.name,
        value: e.target.value
      }
      this.dispatchEvent(event)
    }, true)

    productForm.addEventListener('input', (e) => {
      const event = new Event('validate')
      event.data = {
        name: e.target.name,
        value: e.target.value
      }
      this.dispatchEvent(event)
    }, true)

    return productForm
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
    return this.productForm
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

  getNewProduct(){
    const product = createNewProduct()
    return product
  }
}