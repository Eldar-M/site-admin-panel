import sendRequest from "../sendRequest"
import { productsURL } from '../../apiURLs.js'

export default function sendingProductToTheServer(product) {
    return sendRequest('POST', productsURL, product)
}