import sendRequest from "../sendRequest"
import { ordersURL } from '../../apiURLs.js'

export default function deleteOrderFromServer(order, onDelete) {
    sendRequest('DELETE', ordersURL, order)
        .then(res => onDelete(res.id))
}