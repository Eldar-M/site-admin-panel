import {orderValidationRules} from "./orderValidationRules"

export default function orderFormValidation(order){
  const errors = {}
  for (let key in order) {
    if (order.hasOwnProperty(key)) {
      const err = orderValidationRules[key](order[key])
      if(err){
        errors[key] = err
      }
    }
  }

  return errors
}