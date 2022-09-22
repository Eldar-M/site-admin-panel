import closeModal from "./closeModal";
import sendingCustomerToTheServer from "./sendingCustomerToTheServer";

export default function addNewCustomer(callback) {
    sendingCustomerToTheServer()
        .then(customer => {
            callback(customer)

            closeModal()
    })
}