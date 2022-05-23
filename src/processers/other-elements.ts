import { HTMLElement } from 'node-html-parser'

import { OtherElementsOptions } from '../types'

const otherElementsProcesser = (
  element: HTMLElement,
  options: OtherElementsOptions
) => {
  if (options.addAttributes !== undefined) {
    const attributes = options.addAttributes
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key])
    })
  }

  if (options.addClassName !== undefined) {
    const classNames = options.addClassName
    classNames.forEach((className) => {
      element.classList.add(className)
    })
  }
}

export default otherElementsProcesser
