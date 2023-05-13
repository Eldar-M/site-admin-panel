import ProductFormView from "../../views/products/ProductFormView";
import { productValidationRules } from "../../models/products/productValidationRules";
import productFormValidation from "../../models/products/productFormValidation"

export default class ProductFormController{
  constructor(){
    this.onFormValidate = this.onFormValidate.bind(this)
    this.form = new ProductFormView()
    this.form.addEventListener('validate', this.onFormValidate)
  }

  onFormValidate(event){
    const fieldName = event.data.name
    const value = event.data.value
    const err = productValidationRules[fieldName](value)
    if(err){
      this.form.showErrors({[fieldName]: err})
    }else{
      this.form.deleteErrors(fieldName)
      this.form.showValid(fieldName)
    }
  }

  clearForm(){
    this.form.clearForm()
  }

  getForm(){
    return this.form.getForm()
  }

  getFormErrors(){
    const formErrors = productFormValidation(this.form.getNewProduct())
    return formErrors
  }

  getNewProduct(){
    let newProduct
    const errors = this.getFormErrors()

    if(Object.keys(errors).length === 0){
      newProduct = this.form.getNewProduct()
    }else{
      this.form.showErrors(errors)
    }

    return newProduct
  }
}