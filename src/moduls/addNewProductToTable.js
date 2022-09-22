import getNewTableValues from "./getNewTableValues";
import addElementsToTable from "./addElementsToTable";
import closeModal from "./closeModal";
import sendRequest from "./sendRequest";
import { productsURL } from './apiURLs.js'
import Product from './Product'
import createProduct from './createProduct'

export default function addNewProductToTable() {
    const productValue = getNewTableValues()

    const newProduct = new Product({
        number: productValue.firstInputValue,
        productName: productValue.secondInputValue,
        specification: productValue.thirdInputValue,
        price: productValue.fourthInputValue
    })

    sendRequest('POST', productsURL, newProduct)
        .then(product => {
            const productElement = createProduct(product);

            addElementsToTable([productElement], '.tbodyProducts');

            closeModal()
    })
}