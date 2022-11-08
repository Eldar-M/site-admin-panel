import deleteCustomerFromServer from "../../models/customers/deleteCustomerFromServer"
import addNewCustomer from "../../views/customers/addNewCustomer"
import addCustomerModalToBody from "../../views/customers/addCustomerModalToBody"
import CustomersView from '../../views/customers/CustomersView'

export default class CustomersController{
  constructor(items){
    this.onCustomerDeleteClick = this.onCustomerDeleteClick.bind(this)
    this.onCustomerDelete = this.onCustomerDelete.bind(this)
    this.onCustomerAddClick = this.onCustomerAddClick.bind(this)
    this.onCustomerSaveClick = this.onCustomerSaveClick.bind(this)
    this.onCustomerAdd = this.onCustomerAdd.bind(this)

    this.customersView = new CustomersView(items, this.onCustomerDeleteClick, this.onCustomerAddClick)
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
    addCustomerModalToBody(this.onCustomerSaveClick)
  }

  onCustomerSaveClick(){
    addNewCustomer(this.onCustomerAdd)
  }

  onCustomerAdd(customer){
    this.customersView.addCustomer(customer)
  }
}