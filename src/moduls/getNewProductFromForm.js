export default function getNewProductFromForm() {
  const numberProductInput = document.querySelector('.numberProductInput');
  const productNameInput = document.querySelector('.productNameInput');
  const specificationInput = document.querySelector('.specificationInput');
  const priceInput = document.querySelector('.priceInput');

  return {
      numberProductInputValue: numberProductInput.value,
      productNameInputValue: productNameInput.value,
      specificationInputValue: specificationInput.value,
      priceInputValue: priceInput.value
  }
}