import {createDiv, createForm, createTextInputElement} from '../createElements'

export default function createCustomerModalBodyForm() {
  const form = createForm()
  const customerNumberInputDiv = createDiv('mb-3')
  const customerNumberInputElement = createTextInputElement('Number', 'form-control customerNumberInput')
  const firstNameInputDiv = createDiv('mb-3')
  const firstNameInputElement = createTextInputElement('First Name', 'form-control firstNameInput')
  const lastNameInputDiv = createDiv('mb-3')
  const lastNameInputElement = createTextInputElement('Last Name', 'form-control lastNameInput')
  const companyInputDiv = createDiv('mb-3')
  const companyInputElement = createTextInputElement('Company', 'form-control companyInput')

  customerNumberInputDiv.append(customerNumberInputElement)
  firstNameInputDiv.append(firstNameInputElement)
  lastNameInputDiv.append(lastNameInputElement)
  companyInputDiv.append(companyInputElement)
  form.append(customerNumberInputDiv, firstNameInputDiv, lastNameInputDiv, companyInputDiv)

  return form
}