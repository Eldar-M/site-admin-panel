import CustomerFormView from "../../views/customers/CustomerFormView";
import customerFormValidation from "../../models/customers/customerFormValidation";
import { customerValidationRules } from "../../models/customers/customerValidationRules";

export default class CustomerFormController{
  constructor(){
    this.onFormValidate = this.onFormValidate.bind(this)
    this.form = new CustomerFormView()
    this.form.addEventListener('validate', this.onFormValidate)
  }

  onFormValidate(event){
    const fieldName = event.data.name
    const value = event.data.value
    const err = customerValidationRules[fieldName](value)
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
    const formErrors = customerFormValidation(this.form.getNewCustomer())
    return formErrors
  }

  getNewCustomer(){
    let newCustomer
    const errors = this.getFormErrors()

    if(Object.keys(errors).length === 0){
      newCustomer = this.form.getNewCustomer()
    }else{
      this.form.showErrors(errors)
    }

    return newCustomer
  }
}