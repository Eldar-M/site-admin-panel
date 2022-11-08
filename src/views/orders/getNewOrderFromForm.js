export default function getNewOrderFromForm() {
  const numberInput = document.querySelector('.numberInput');
  const customerInput = document.querySelector('.customerInput');
  const productInput = document.querySelector('.productInput');
  const amountInput = document.querySelector('.amountInput');
  const totalInput = document.querySelector('.totalInput');

  return {
    numberInputValue: numberInput.value,
    customerInputValue: customerInput.value,
    productInputValue: productInput.value,
    amountInputValue: amountInput.value,
    totalInputValue: totalInput.value
  }
}