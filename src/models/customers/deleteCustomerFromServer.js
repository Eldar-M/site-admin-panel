import sendRequest from "../sendRequest"
import { customersURL } from '../../apiURLs.js'

export default function deleteCustomerFromServer(customer, onDelete) {
    sendRequest('DELETE', customersURL, customer)
        .then(res => onDelete(res.id))
}