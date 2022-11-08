import closeModal from "../modal/closeModal";
import sendingCustomerToTheServer from "../../models/customers/sendingCustomerToTheServer";
import createNewCustomer from "./createNewCustomer";

export default function addNewCustomer(onNewCustomerCreate) {
    const customer = createNewCustomer()
    
    sendingCustomerToTheServer(customer)
        .then(customer => {
            onNewCustomerCreate(customer)

            closeModal()
    })
}