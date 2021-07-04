import { HTMLElement } from 'node-html-parser'

import { MergedDefaultOptions } from '../../processer'
import { default as hljsHighlight } from './highlightjs'

const codeProcesser = async (
  codeElement: HTMLElement,
  options: MergedDefaultOptions
): Promise<void> => {
  if (options.code.lib === 'highlight.js') {
    codeElement.innerHTML = hljsHighlight(codeElement.innerText)
    codeElement.classList.add('hljs')
  }
}

export default codeProcesser
