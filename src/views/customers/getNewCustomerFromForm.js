export default function getNewCustomerFromForm() {
  const firstNameInput = document.querySelector('.firstNameInput');
  const lastNameInput = document.querySelector('.lastNameInput');
  const companyInput = document.querySelector('.companyInput');

  return {
      firstNameInputValue: firstNameInput.value,
      lastNameInputValue: lastNameInput.value,
      companyInputValue: companyInput.value
  }
}