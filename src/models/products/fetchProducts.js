import { productsURL } from '../../apiURLs.js'

export default function fetchProducts() {
    return fetch(productsURL)
        .then(response => response.json())
};