import {createDiv} from '../createElements'

export default function createModalBody(bodyForm) {
  const body = createDiv('modal-body')

  body.append(bodyForm)

  return body
}