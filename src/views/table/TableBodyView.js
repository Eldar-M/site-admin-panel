import createTableRow from "./createTableRow"
import { createTbody } from "../createElements"

export default class TableBodyView{
  constructor(config, items){
    this.getElement = this.getElement.bind(this)
    this.items = items
    this.config = config
    this.rowsMap = new Map()
    this.tableBody = createTbody('tbody')
  }

  getElement(){
    const rowsEntries = this.items.map(element => {
      return [element.id, createTableRow(this.config, element)]
    })

    this.rowsMap = new Map(rowsEntries)

    this.tableBody.append(...this.rowsMap.values())

    return this.tableBody
  }

  addRow(item) {
    const row = createTableRow(this.config, item)
    this.tableBody.append(row)
    this.rowsMap.set(item.id, row)
    this.items.push(item)
  }

  deleteRow(id){
    const row = this.rowsMap.get(id)

    if(row !== undefined){
      this.rowsMap.delete(id)
      row.remove()
    }
  }
}