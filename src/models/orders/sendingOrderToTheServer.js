import sendRequest from "../sendRequest"
import { ordersURL } from '../../apiURLs.js'

export default function sendingOrderToTheServer(order) {
    return sendRequest('POST', ordersURL, order)
}