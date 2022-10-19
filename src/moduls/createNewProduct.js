import getNewTableValues from "./getNewTableValues"
import Product from "./Product"

export default function createNewProduct() {
    const productValue = getNewTableValues()

    const newProduct = new Product({
        number: productValue.firstInputValue,
        productName: productValue.secondInputValue,
        specification: productValue.thirdInputValue,
        price: productValue.fourthInputValue
    })

    return newProduct
}