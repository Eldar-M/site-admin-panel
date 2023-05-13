import { createOptionElement } from "../createElements"

export default function createCustomerOption(customers){
  const options = customers.map(customer => createOptionElement(customer.id, `${customer.firstName +' '+ customer.lastName +' '+ '('+ customer.company +')'}`))
  return options
}