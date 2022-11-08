import closeModal from "../modal/closeModal";
import sendingOrderToTheServer from '../../models/orders/sendingOrderToTheServer'
import createNewOrder from "./createNewOrder"

export default function addNewOrder(onNewOrderCreate) {
    const order = createNewOrder()

    sendingOrderToTheServer(order)
        .then(order => {
            onNewOrderCreate(order)

            closeModal()
    })
}