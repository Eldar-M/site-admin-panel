import ProductsController from './ProductsController'
import fetchProducts from '../../models/products/fetchProducts'

export default function onProductsCardClick() {
  const card = document.querySelector('.card')

  fetchProducts()
    .then(data => {
        const productsController = new ProductsController(data)

        productsController.elementReplace(card)
    })
}