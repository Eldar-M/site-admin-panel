import {createDiv, createOptionElement, createSelectElement} from '../createElements'

export default function createCustomerSelectDiv(value, name, customers){
  const customerSelectDiv = createDiv('mb-3')
  const select = createSelectElement('form-select customerInput')
  const customerOption = createOptionElement(value, 'Customer...')
  select.setAttribute('name', name)
  select.append(customerOption)
  select.append(...customers.map(customer => createOptionElement(customer.id, `${customer.firstName +' '+ customer.lastName +' '+ '('+ customer.company +')'}`)))
  customerSelectDiv.append(select)
  return customerSelectDiv
}