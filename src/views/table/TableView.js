import { createTableElement } from "../createElements"
import createTableHead from "./createTableHead"
import TableBodyView from "./TableBodyView"

export default class TableView {
  constructor(config, items){
    this.items = items
    this.config = config
    this.table = createTableElement('table table-bordered table-hoover')
    this.tableHead = createTableHead(this.config.columnName)
    this.tableBody = new TableBodyView(this.config, this.items)
  }

  getNewTable(){
    this.table.append(this.tableHead, this.tableBody.getElement())
    return this.table
  }

  addRow(item){
    this.tableBody.addRow(item)
  }

  deleteRow(id){
    this.tableBody.deleteRow(id)
  }
}