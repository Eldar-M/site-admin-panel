import { productValidationRules } from "./productValidationRules"

export default function customerFormValidation(product){
  const errors = {}
  for (let key in product) {
    if (product.hasOwnProperty(key)) {
      const err = productValidationRules[key](product[key])
      if(err){
        errors[key] = err
      }
    }
  }

  return errors
}