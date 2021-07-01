import { HTMLElement } from 'node-html-parser'

import { MergedDefaultOptions } from '../processer'

const iframeProcesser = (
  iframeElements: HTMLElement[],
  options: MergedDefaultOptions
): void => {
  const processerFunctions: ((iframe: HTMLElement) => void)[] = []

  if (options.iframe.provider === 'lazysizes') {
    if (options.iframe.lazy) {
      processerFunctions.push((iframe) => {
        const src = iframe.getAttribute('src')

        if (src === undefined) {
          throw Error('Some of the iframe tags do not have src set.')
        }

        iframe.setAttribute('data-src', src)
        iframe.removeAttribute('src')
      })
    }

    if (options.iframe.width !== undefined) {
      const width = options.iframe.width
      processerFunctions.push((iframe) => {
        iframe.setAttribute('width', width.toString())
      })
    }

    if (options.iframe.height !== undefined) {
      const height = options.iframe.height
      processerFunctions.push((iframe) => {
        iframe.setAttribute('height', height.toString())
      })
    }
  }

  iframeElements.forEach((iframe) => {
    processerFunctions.forEach((processerFunction) => processerFunction(iframe))
  })
}

export default iframeProcesser
