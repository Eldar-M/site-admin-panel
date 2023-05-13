import closeModal from "../modal/closeModal";
import sendingProductToTheServer from "../../models/products/sendingProductToTheServer";
import createNewProduct from "./createNewProduct"

export default function addNewProduct(product, onNewProductCreate) {
    // const product = createNewProduct()

    sendingProductToTheServer(product)
        .then(product => {
            onNewProductCreate(product)

            closeModal()
    })
}