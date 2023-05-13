import {createDiv, createTextInputElement} from '../createElements'

export default function createInputDiv(placeholder, className, name){
  const inputDiv = createDiv('mb-3')
  const companyInputElement = createTextInputElement(placeholder, className)
  companyInputElement.setAttribute('name', name)
  inputDiv.append(companyInputElement)
  return inputDiv
}