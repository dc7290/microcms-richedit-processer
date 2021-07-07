import { HTMLElement } from 'node-html-parser'

import { MergedDefaultOptions } from '../../processer'

const codeProcesser = async (
  codeElement: HTMLElement,
  options: MergedDefaultOptions
): Promise<void> => {
  if (options.code.addAttribute !== undefined) {
    const attributes = options.code.addAttribute
    Object.keys(attributes).forEach((key) => {
      codeElement.setAttribute(key, attributes[key])
    })
  }

  if (options.code.addClassName !== undefined) {
    const classNames = options.code.addClassName
    classNames.forEach((className) => {
      codeElement.classList.add(className)
    })
  }

  if (options.code.lib === 'highlight.js') {
    const { default: hljsHighlight } = await import('./highlightjs')
    codeElement.innerHTML = hljsHighlight(codeElement.text)
    codeElement.classList.add('hljs')
  }
}

export default codeProcesser
