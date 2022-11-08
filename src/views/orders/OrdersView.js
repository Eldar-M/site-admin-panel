import createOrderConfig from "./createOrderConfig"
import createCard from "../siteSection/createCard"
import createCardHeader from '../siteSection/createCardHeader.js.js'
import TableView from "../table/TableView"

export default class OrdersView {
  
  constructor(data, onDeleteClick, onAddClick) {
    this.config = createOrderConfig(onDeleteClick)
    this.orders = data
    this.table = new TableView(this.config, this.orders)
    this.header = createCardHeader(this.config.headerName, onAddClick)
    this.siteSection = createCard(this.header, this.table.getNewTable())
  }

  deleteOrder(id){
    this.table.deleteRow(id)
  }

  addOrder(order){
    this.table.addRow(order)
  }

  getElement(){
    return this.siteSection
  }
}