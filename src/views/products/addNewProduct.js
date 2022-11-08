import closeModal from "../modal/closeModal";
import sendingProductToTheServer from "../../models/products/sendingProductToTheServer";
import createNewProduct from "./createNewProduct"

export default function addNewProduct(onNewProductCreate) {
    const product = createNewProduct()

    sendingProductToTheServer(product)
        .then(product => {
            onNewProductCreate(product)

            closeModal()
    })
}