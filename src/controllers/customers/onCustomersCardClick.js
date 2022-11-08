import CustomersController from "./CustomersController"
import fetchCustomers from '../../models/customers/fetchCustomers'

export default function onCustomersCardClick() {
  const card = document.querySelector('.card')

  fetchCustomers()
    .then(data => {
        const customersController = new CustomersController(data)

        customersController.elementReplace(card)
    })
}