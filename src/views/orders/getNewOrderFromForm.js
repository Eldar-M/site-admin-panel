export default function getNewOrderFromForm() {
  const customerInput = document.querySelector('.customerInput');
  const productInput = document.querySelector('.productInput');
  const amountInput = document.querySelector('.amountInput');

  return {
    customerInputValue: customerInput.value,
    productInputValue: productInput.value,
    amountInputValue: amountInput.value
  }
}