import createCustomerConfig from "./createCustomerConfig"
import createCard from "../siteSection/createCard"
import createCardHeader from '../siteSection/createCardHeader.js.js'
import TableView from "../table/TableView"

export default class CustomersView {
  
  constructor(data, onDeleteClick, onAddClick) {
    this.config = createCustomerConfig(onDeleteClick)
    this.customers = data
    this.table = new TableView(this.config, this.customers)
    this.header = createCardHeader(this.config.headerName, onAddClick)
    this.card = createCard(this.header, this.table.getNewTable())
  }

  deleteCustomer(id){
    this.table.deleteRow(id)
  }

  addCustomer(customer){
    this.table.addRow(customer)
  }

  getElement(){
    return this.card
  }
}