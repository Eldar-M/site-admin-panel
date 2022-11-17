import deleteOrderFromServer from "../../models/orders/deleteOrderFromServer"
import addNewOrder from "../../views/orders/addNewOrder"
import addOrderModalToBody from "../../views/orders/addOrderModalToBody"
import OrdersView from "../../views/orders/OrdersView"

import fetchCustomers from "../../models/customers/fetchCustomers"
import fetchProducts from "../../models/products/fetchProducts"

export default class OrdersController{
  constructor(items){
    this.onOrderDeleteClick = this.onOrderDeleteClick.bind(this)
    this.onOrderDelete = this.onOrderDelete.bind(this)
    this.onOrderAddClick = this.onOrderAddClick.bind(this)
    this.onOrderSaveClick = this.onOrderSaveClick.bind(this)
    this.onOrderAdd = this.onOrderAdd.bind(this)

    this.getCustomers()
    this.getProducts()

    this.customers = []
    this.products = []
    this.ordersView = new OrdersView(items, this.onOrderDeleteClick, this.onOrderAddClick)
  }

  getCustomers(){
    fetchCustomers()
      .then(data => {
        this.customers = data
      })
  }

  getProducts(){
    fetchProducts()
      .then(data => {
        this.products = data
      })
  }

  elementReplace(element){
    element.replaceWith(this.ordersView.getElement())
  }

  onOrderDeleteClick(order){
    deleteOrderFromServer(order, this.onOrderDelete)
  }

  onOrderDelete(id){
    this.ordersView.deleteOrder(id)
  }

  onOrderAddClick(){
    addOrderModalToBody(this.customers, this.products, this.onOrderSaveClick)
  }

  onOrderSaveClick(){
    addNewOrder(this.onOrderAdd)
  }

  onOrderAdd(order){
    this.ordersView.addOrder(order)
  }
}