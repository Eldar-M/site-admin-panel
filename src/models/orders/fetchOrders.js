import { ordersURL } from '../../apiURLs.js'

export default function fetchOrders() {
    return fetch(ordersURL)
        .then(response => response.json())
};