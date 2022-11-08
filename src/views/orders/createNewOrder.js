import getNewOrderFromForm from "./getNewOrderFromForm"
import Order from "../../models/orders/Order"

export default function createNewOrder() {
    const orderValue = getNewOrderFromForm()

    const newOrder = new Order({
        number: orderValue.numberInputValue,
        customer: orderValue.customerInputValue,
        product: orderValue.productInputValue,
        amount: orderValue.amountInputValue,
        total: orderValue.totalInputValue
    })

    return newOrder
}