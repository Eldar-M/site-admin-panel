import sendRequest from "./sendRequest"
import { customersURL } from './apiURLs.js'

export default function sendingCustomerToTheServer(customer) {
    return sendRequest('POST', customersURL, customer)
}