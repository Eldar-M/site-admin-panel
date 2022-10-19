import closeModal from "./closeModal";
import sendingProductToTheServer from "./sendingProductToTheServer";
import createNewProduct from "./createNewProduct"

export default function addNewProduct(onNewProductCreate) {
    const product = createNewProduct()

    sendingProductToTheServer(product)
        .then(product => {
            onNewProductCreate(product)

            closeModal()
    })
}