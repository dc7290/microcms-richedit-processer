import { HTMLElement } from 'node-html-parser'

import { MergedDefaultOptions } from '../../processer'

const codeProcesser = async (
  codeElement: HTMLElement,
  options: MergedDefaultOptions
): Promise<void> => {
  if (options.code.lib === 'highlight.js') {
    const { default: hljsHighlight } = await import('./highlightjs')
    codeElement.innerHTML = hljsHighlight(codeElement.text)
    codeElement.classList.add('hljs')
  }
}

export default codeProcesser
