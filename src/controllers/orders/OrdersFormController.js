import OrderFormView from "../../views/orders/OrderFormView";
import orderFormValidation from "../../models/orders/orderFormValidation"
import { orderValidationRules } from "../../models/orders/orderValidationRules";
import fetchCustomers from "../../models/customers/fetchCustomers"
import fetchProducts from "../../models/products/fetchProducts"
import amountCalculate from "../../models/orders/amountCalculate"

export default class OrderFormController{
  constructor(){
    this.onFormValidate = this.onFormValidate.bind(this)
    this.form = new OrderFormView()
    this.form.addEventListener('validate', this.onFormValidate)
    this.form.addEventListener('total', (e) => this.onTotalCalculate(e))

    this.getCustomers()
    this.getProducts()

    this.products = []
  }

  getCustomers(){
    fetchCustomers()
      .then(data => {
        this.form.appendNewOptionsToCustomer(data)
      })
  }

  getProducts(){
    fetchProducts()
      .then(data => {
        this.products = data
        this.form.appendNewOptionsToProduct(data)
      })
  }

  onTotalCalculate(){
    const amount = this.form.getAmount()
    const productID = this.form.getProduct()
    console.log(productID)
    if(amount && productID){
      this.form.updateTotal(amountCalculate(amount, productID, this.products))
    }
  }
  
  onFormValidate(event){
    const fieldName = event.data.name
    const value = event.data.value
    const err = orderValidationRules[fieldName](value)
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
    const formErrors = orderFormValidation(this.form.getNewOrder())
    return formErrors
  }

  getNewOrder(){
    let newOrder
    const errors = this.getFormErrors()

    if(Object.keys(errors).length === 0){
      newOrder = this.form.getNewOrder()
    }else{
      this.form.showErrors(errors)
    }

    return newOrder
  }
}