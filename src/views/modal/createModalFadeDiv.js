import {createDiv} from '../createElements'

export default function createModalFadeDiv() {
  const modal = createDiv('modal fade')
  modal.id = 'exampleModal'
  modal.setAttribute('tabindex', '-1')
  modal.setAttribute('aria-labelledby', 'exampleModalLabel')
  modal.setAttribute('aria-hidden', 'true')
  modal.setAttribute('style', 'display: none;')

  return modal
}