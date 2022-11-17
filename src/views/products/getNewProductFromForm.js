export default function getNewProductFromForm() {
  const productNameInput = document.querySelector('.productNameInput');
  const specificationInput = document.querySelector('.specificationInput');
  const priceInput = document.querySelector('.priceInput');

  return {
      productNameInputValue: productNameInput.value,
      specificationInputValue: specificationInput.value,
      priceInputValue: priceInput.value
  }
}