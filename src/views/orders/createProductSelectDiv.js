import {createDiv, createOptionElement, createSelectElement} from '../createElements'

export default function createProductSelectDiv(value, name, products){
  const productSelectDiv = createDiv('mb-3')
  const selectProduct = createSelectElement('form-select productInput')
  const productOption = createOptionElement(value, 'Product...')
  selectProduct.setAttribute('name', name)
  selectProduct.append(productOption)
  selectProduct.append(...products.map(product => createOptionElement(product.id, `${product.productName +' '+ product.specification}`)))
  productSelectDiv.append(selectProduct)
  return productSelectDiv
}