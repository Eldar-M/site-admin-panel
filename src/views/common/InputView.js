import { createDiv, createTextInputElement } from "../createElements";

export default class InputView {
  constructor(placeholder, className, name){
    this.input = createTextInputElement(placeholder, className)
    this.div = this.createInputDiv(name)
  }

  createInputDiv(name){
    const inputDiv = createDiv('mb-3')
    const input = this.input
    input.setAttribute('name', name)
    inputDiv.append(input)
    return inputDiv
  }

  appendDiv(div){
    this.div.append(div)
  }

  getDiv(){
    return this.div
  }

  getValue(){
    return this.input.value
  }
}