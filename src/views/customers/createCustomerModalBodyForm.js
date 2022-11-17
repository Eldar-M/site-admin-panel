import {createDiv, createForm, createTextInputElement} from '../createElements'

export default function createCustomerModalBodyForm() {
  const form = createForm()
  const firstNameInputDiv = createDiv('mb-3')
  const firstNameInputElement = createTextInputElement('First Name', 'form-control firstNameInput')
  const lastNameInputDiv = createDiv('mb-3')
  const lastNameInputElement = createTextInputElement('Last Name', 'form-control lastNameInput')
  const companyInputDiv = createDiv('mb-3')
  const companyInputElement = createTextInputElement('Company', 'form-control companyInput')

  firstNameInputDiv.append(firstNameInputElement)
  lastNameInputDiv.append(lastNameInputElement)
  companyInputDiv.append(companyInputElement)
  form.append(firstNameInputDiv, lastNameInputDiv, companyInputDiv)

  return form
}