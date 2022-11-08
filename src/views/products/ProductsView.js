import createProductConfig from "./createProductConfig"
import createCard from "../siteSection/createCard"
import createCardHeader from '../siteSection/createCardHeader.js.js'
import TableView from "../table/TableView"

export default class ProductsView {
  
  constructor(data, onDeleteClick, onAddClick) {
    this.config = createProductConfig(onDeleteClick)
    this.products = data
    this.table = new TableView(this.config, this.products)
    this.header = createCardHeader(this.config.headerName, onAddClick)
    this.card = createCard(this.header, this.table.getNewTable())
  }

  deleteProduct(id){
    this.table.deleteRow(id)
  }

  addProduct(product){
    this.table.addRow(product)
  }

  getElement(){
    return this.card
  }
}