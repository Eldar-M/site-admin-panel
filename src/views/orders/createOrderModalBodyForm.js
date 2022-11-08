import {createDiv, createForm, createTextInputElement} from '../createElements'

export default function createOrderModalBodyForm() {
  const form = createForm()
  const numberInputDiv = createDiv('mb-3')
  const numberInputElement = createTextInputElement('Number', 'form-control numberInput')
  const customerInputDiv = createDiv('mb-3')
  const customerInputElement = createTextInputElement('Customer', 'form-control customerInput')
  const productInputDiv = createDiv('mb-3')
  const productInputElement = createTextInputElement('Product', 'form-control productInput')
  const amountInputDiv = createDiv('mb-3')
  const amountInputElement = createTextInputElement('Amount', 'form-control amountInput')
  const totalInputDiv = createDiv('mb-3')
  const totalInputElement = createTextInputElement('Total', 'form-control totalInput')

  numberInputDiv.append(numberInputElement)
  customerInputDiv.append(customerInputElement)
  productInputDiv.append(productInputElement)
  amountInputDiv.append(amountInputElement)
  totalInputDiv.append(totalInputElement)
  form.append(numberInputDiv, customerInputDiv, productInputDiv, amountInputDiv, totalInputDiv)

  return form
}