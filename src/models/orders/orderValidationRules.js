const customerValidationRule = (value) => {
  if(value === 'customer'){
    return 'Please select the customer'
  }
}

const productValidationRule = (value) => {
  if(value === 'product'){
    return 'Please select the product'
  }
}

const amountValidationRule = (value) => {
  if(value === ''){
    return 'Please enter amount'
  }
}

export const orderValidationRules = {
  customer: customerValidationRule,
  product: productValidationRule,
  amount: amountValidationRule
}