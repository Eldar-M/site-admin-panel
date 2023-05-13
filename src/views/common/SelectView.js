import { createDiv, createOptionElement, createSelectElement } from "../createElements";

export default class SelectView {
  constructor(className, name, innerText){
    this.select = createSelectElement(className)
    this.option = createOptionElement('', innerText)
    this.div = this.createSelectDiv(name)
  }

  getValue(){
    return this.select.value
  }

  createSelectDiv(name){
    const div = createDiv('mb-3')
    const select = this.select
    select.setAttribute('name', name)
    select.append(this.option)
    div.append(select)
    return div
  }

  appendNewOptions(options){
    this.select.append(...options)
  }

  appendDiv(div){
    this.div.append(div)
  }

  getDiv(){
    return this.div
  }
}