import closeModal from "./closeModal";
import sendingCustomerToTheServer from "./sendingCustomerToTheServer";

export default function addNewCustomer(onNewCustomerCreate) {
    sendingCustomerToTheServer()
        .then(customer => {
            onNewCustomerCreate(customer)

            closeModal()
    })
}