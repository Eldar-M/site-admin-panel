import getNewTableValues from "./getNewTableValues"
import Customer from "./Customer"

export default function createNewCustomer() {
    const customerValue = getNewTableValues()

    const newCustomer = new Customer({
        number: customerValue.firstInputValue,
        firstName: customerValue.secondInputValue,
        lastName: customerValue.thirdInputValue,
        company: customerValue.fourthInputValue
    })

    return newCustomer
}