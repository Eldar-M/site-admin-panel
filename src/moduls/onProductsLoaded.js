import createProduct from "./createProduct";
import addElementsToTable from "./addElementsToTable";
import { productsURL } from './apiURLs.js'

export default function onProductsLoaded() {

    fetch(productsURL)
        .then(response => response.json())
        .then(data => {
            const restoredListProducts = data.slice();
            
            const productElements = restoredListProducts.map((product) => createProduct(product))
            addElementsToTable(productElements, '.tbodyProducts')

        }).catch(err => console.log(err))
};