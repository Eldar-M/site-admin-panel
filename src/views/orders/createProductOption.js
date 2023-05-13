import { createOptionElement } from "../createElements"

export default function createProductOption(products){
  const options = products.map(product => createOptionElement(product.id, `${product.productName +' '+ product.specification}`))
  return options
}