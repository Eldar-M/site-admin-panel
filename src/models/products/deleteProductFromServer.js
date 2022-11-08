import sendRequest from "../sendRequest"
import { productsURL } from '../../apiURLs.js'

export default function deleteProductFromServer(product, onDelete) {
    sendRequest('DELETE', productsURL, product)
        .then(res => onDelete(res.id))
}