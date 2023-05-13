import { customerValidationRules } from "./customerValidationRules"

export default function customerFormValidation(customer){
  const errors = {}
  for (let key in customer) {
    if (customer.hasOwnProperty(key)) {
      const err = customerValidationRules[key](customer[key])
      if(err){
        errors[key] = err
      }
    }
  }

  return errors
}