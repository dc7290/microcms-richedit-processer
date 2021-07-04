import { HTMLElement } from 'node-html-parser'

import { MergedDefaultOptions } from '../../processer'
import { default as hljsHighlight } from './highlightjs'

const codeProcesser = (
  codeElements: HTMLElement[],
  options: MergedDefaultOptions
): void => {
  const processerFunctions: ((iframe: HTMLElement) => void)[] = []

  if (options.code.lib === 'highlight.js') {
    processerFunctions.push((code: HTMLElement) => {
      code.innerHTML = hljsHighlight(code.innerText)
      code.classList.add('hljs')
    })
  }

  codeElements.forEach((code) => {
    processerFunctions.forEach((processerFunction) => processerFunction(code))
  })
}

export default codeProcesser
