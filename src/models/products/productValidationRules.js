const productNameValidationRule = (value) => {
  if(value === ''){
    return 'Please enter product name'
  }
}

const specificationValidationRule = (value) => {
  if(value === ''){
    return 'Please enter specification'
  }
}

const priceValidationRule = (value) => {
  if(value === ''){
    return 'Please enter price'
  }
}

export const productValidationRules = {
  productName: productNameValidationRule,
  specification: specificationValidationRule,
  price: priceValidationRule
}