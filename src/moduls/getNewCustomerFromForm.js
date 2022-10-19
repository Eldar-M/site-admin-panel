export default function getNewCustomerFromForm() {
  const customerNumberInput = document.querySelector('.customerNumberInput');
  const firstNameInput = document.querySelector('.firstNameInput');
  const lastNameInput = document.querySelector('.lastNameInput');
  const companyInput = document.querySelector('.companyInput');

  return {
      customerNumberInputValue: customerNumberInput.value,
      firstNameInputValue: firstNameInput.value,
      lastNameInputValue: lastNameInput.value,
      companyInputValue: companyInput.value
  }
}