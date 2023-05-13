import deleteProductFromServer from "../../models/products/deleteProductFromServer"
import addNewProduct from "../../views/products/addNewProduct"
import addProductModalToBody from "../../views/products/addProductModalToBody"
import ProductsView from "../../views/products/ProductsView"
import ProductFormController from "./ProductFormController"


export default class ProductsController{
  constructor(items){
    this.onProductDeleteClick = this.onProductDeleteClick.bind(this)
    this.onProductDelete = this.onProductDelete.bind(this)
    this.onProductAddClick = this.onProductAddClick.bind(this)
    this.onProductSaveClick = this.onProductSaveClick.bind(this)
    this.onProductAdd = this.onProductAdd.bind(this)

    this.productsView = new ProductsView(items, this.onProductDeleteClick, this.onProductAddClick)
    this.productFormController = new ProductFormController()
  }

  elementReplace(element){
    element.replaceWith(this.productsView.getElement())
  }

  onProductDeleteClick(product){
    deleteProductFromServer(product, this.onProductDelete)
  }

  onProductDelete(id){
    this.productsView.deleteProduct(id)
  }

  onProductAddClick(){
    addProductModalToBody(this.productFormController.getForm(), this.onProductSaveClick)
    this.productFormController.clearForm()
  }

  onProductSaveClick(){
    if(this.productFormController.getNewProduct()){
      addNewProduct(this.productFormController.getNewProduct(), this.onProductAdd)
    }
  }

  onProductAdd(product){
    this.productsView.addProduct(product)
  }
}