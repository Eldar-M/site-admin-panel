import getNewCustomerFromForm from "./getNewCustomerFromForm"
import Customer from "./Customer"

export default function createNewCustomer() {
    const customerValue = getNewCustomerFromForm()

    const newCustomer = new Customer({
        number: customerValue.customerNumberInputValue,
        firstName: customerValue.firstNameInputValue,
        lastName: customerValue.lastNameInputValue,
        company: customerValue.companyInputValue
    })

    return newCustomer
}