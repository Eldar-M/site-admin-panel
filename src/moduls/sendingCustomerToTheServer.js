import sendRequest from "./sendRequest"
import createNewCustomer from "./createNewCustomer"
import { customersURL } from './apiURLs.js'

export default function sendingCustomerToTheServer() {
    return sendRequest('POST', customersURL, createNewCustomer())
}