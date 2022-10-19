import closeModal from "./closeModal";
import sendingCustomerToTheServer from "./sendingCustomerToTheServer";
import createNewCustomer from "./createNewCustomer";

export default function addNewCustomer(onNewCustomerCreate) {
    const customer = createNewCustomer()
    
    sendingCustomerToTheServer(customer)
        .then(customer => {
            onNewCustomerCreate(customer)

            closeModal()
    })
}