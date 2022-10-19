import closeModal from "./closeModal";
import sendingProductToTheServer from "./sendingProductToTheServer";

export default function addNewProduct(onNewProductCreate) {
    sendingProductToTheServer()
        .then(product => {
            onNewProductCreate(product)

            closeModal()
    })
}