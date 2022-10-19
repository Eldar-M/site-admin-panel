import sendRequest from "./sendRequest"
import createNewProduct from "./createNewProduct"
import { productsURL } from './apiURLs.js'

export default function sendingProductToTheServer() {
    return sendRequest('POST', productsURL, createNewProduct())
}