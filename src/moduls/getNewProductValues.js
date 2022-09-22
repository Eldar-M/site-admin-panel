export default function getNewProductValues() {
    const numberProductInput = document.querySelector('.numberProduct');
    const productNameInput = document.querySelector('.pname');
    const specificationInput = document.querySelector('.specification');
    const priceInput = document.querySelector('.price');

    return {
        numberProductInputValue: numberProductInput.value,
        productNameInputValue: productNameInput.value,
        specificationInputValue: specificationInput.value,
        priceInputValue: priceInput.value
    }
}