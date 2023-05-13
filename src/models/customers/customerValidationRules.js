const firstNameValidationRule = (value) => {
  if(value === ''){
    return 'Please enter your first name'
  }
}

const lastNameValidationRule = (value) => {
  if(value === ''){
    return 'Please enter your last name'
  }
}

const companyValidationRule = (value) => {
  if(value === ''){
    return 'Please enter your company'
  }
}

export const customerValidationRules = {
  firstName: firstNameValidationRule,
  lastName: lastNameValidationRule,
  company: companyValidationRule
}