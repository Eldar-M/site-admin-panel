export default function getNewCustomerValues() {
    const numberInput = document.querySelector('.number');
    const firstNameInput = document.querySelector('.fname');
    const lastNameInput = document.querySelector('.lname');
    const companyInput = document.querySelector('.tdcompany');

    return {
        numberInputValue: numberInput.value,
        firstNameInputValue: firstNameInput.value,
        lastNameInputValue: lastNameInput.value,
        companyInputValue: companyInput.value
    }
}