import deleteCustomerFromServer from "../../models/customers/deleteCustomerFromServer"
import addNewCustomer from "../../views/customers/addNewCustomer"
import addCustomerModalToBody from "../../views/customers/addCustomerModalToBody"
import CustomersView from '../../views/customers/CustomersView'
import CustomerFormController from "./CustomerFormController"

export default class CustomersController{
  constructor(items){
    this.onCustomerDeleteClick = this.onCustomerDeleteClick.bind(this)
    this.onCustomerDelete = this.onCustomerDelete.bind(this)
    this.onCustomerAddClick = this.onCustomerAddClick.bind(this)
    this.onCustomerSaveClick = this.onCustomerSaveClick.bind(this)
    this.onCustomerAdd = this.onCustomerAdd.bind(this)

    this.customersView = new CustomersView(items, this.onCustomerDeleteClick, this.onCustomerAddClick)
    this.customerFormController = new CustomerFormController()
  }

  elementReplace(element){
    element.replaceWith(this.customersView.getElement())
  }

  onCustomerDeleteClick(customer){
    deleteCustomerFromServer(customer, this.onCustomerDelete)
  }

  onCustomerDelete(id){
    this.customersView.deleteCustomer(id)
  }

  onCustomerAddClick(){
    addCustomerModalToBody(this.customerFormController.getForm(), this.onCustomerSaveClick)
    this.customerFormController.clearForm()
  }

  onCustomerSaveClick(){
    if(this.customerFormController.getNewCustomer()){
      addNewCustomer(this.customerFormController.getNewCustomer(), this.onCustomerAdd)
    }
  }

  onCustomerAdd(customer){
    this.customersView.addCustomer(customer)
  }
}