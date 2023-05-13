import {createDiv, createForm, createTextInputElement} from '../createElements'

export default function createCustomerModalBodyForm() {
  const form = createForm('form-customer')
  const firstNameInputDiv = createDiv('mb-3')
  const firstNameInputElement = createTextInputElement('First Name', 'form-control firstNameInput')
  const lastNameInputDiv = createDiv('mb-3')
  const lastNameInputElement = createTextInputElement('Last Name', 'form-control lastNameInput')
  const companyInputDiv = createDiv('mb-3')
  const companyInputElement = createTextInputElement('Company', 'form-control companyInput')

  // const add = createSubmitElement('btn btn-primary add', 'Add')

  firstNameInputDiv.append(firstNameInputElement)
  lastNameInputDiv.append(lastNameInputElement)
  companyInputDiv.append(companyInputElement)
  form.append(firstNameInputDiv, lastNameInputDiv, companyInputDiv)

  // form.addEventListener('submit', function(e){
  //   const inputs = document.querySelectorAll('.form-control')
  //   const invalidInputs = Array.from(inputs).filter(el => !el.value)
  //   invalidInputs.forEach(elem => {
  //     elem.classList.add('err')
  //   })
  //   if(invalidInputs.length === 0){
  //     callback()
  //   }
  // })

  return form
}