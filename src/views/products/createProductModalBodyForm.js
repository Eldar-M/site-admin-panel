import {createDiv, createForm, createTextInputElement} from '../createElements'

export default function createProductModalBodyForm() {
  const form = createForm()
  const numberProductInputDiv = createDiv('mb-3')
  const numberProductInputElement = createTextInputElement('Number', 'form-control numberProductInput')
  const productNameInputDiv = createDiv('mb-3')
  const productNameInputElement = createTextInputElement('Product Name', 'form-control productNameInput')
  const specificationInputDiv = createDiv('mb-3')
  const specificationInputElement = createTextInputElement('Specification', 'form-control specificationInput')
  const priceInputDiv = createDiv('mb-3')
  const priceInputElement = createTextInputElement('Price', 'form-control priceInput')

  numberProductInputDiv.append(numberProductInputElement)
  productNameInputDiv.append(productNameInputElement)
  specificationInputDiv.append(specificationInputElement)
  priceInputDiv.append(priceInputElement)
  form.append(numberProductInputDiv, productNameInputDiv, specificationInputDiv, priceInputDiv)

  return form
}