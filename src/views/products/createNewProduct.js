import getNewProductFromForm from "./getNewProductFromForm"
import Product from "../../models/products/Product"

export default function createNewProduct() {
    const productValue = getNewProductFromForm()

    const newProduct = new Product({
        productName: productValue.productNameInputValue,
        specification: productValue.specificationInputValue,
        price: productValue.priceInputValue
    })

    return newProduct
}