// @ts-check
import '../types'

/**
 * Creates the SelectorArea
 * @param {string} selectorAreaClass
 * @return {HTMLDivElement}
 */
export default (selectorAreaClass) => {
  const node = document.createElement('div')
  node.style.position = 'fixed'
  node.style.overflow = 'hidden'
  node.style.pointerEvents = 'none'
  node.classList.add(selectorAreaClass)
  return node
}
