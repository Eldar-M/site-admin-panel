import { customersURL } from '../../apiURLs.js'

export default function fetchCustomers() {
    return fetch(customersURL)
        .then(response => response.json())
};