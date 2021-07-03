import { HTMLElement } from 'node-html-parser'

import { MergedDefaultOptions } from '../processer'

const iframeProcesser = (
  iframeElements: HTMLElement[],
  options: MergedDefaultOptions
): void => {
  const processerFunctions: ((iframe: HTMLElement) => void)[] = []

  if (options.iframe.addClassName !== undefined) {
    const classNames = options.iframe.addClassName
    processerFunctions.push((iframe: HTMLElement) => {
      classNames.forEach((className) => {
        iframe.classList.add(className)
      })
    })
  }

  if (options.iframe.provider === 'lazysizes') {
    if (options.iframe.lazy) {
      processerFunctions.push((iframe) => {
        const src = iframe.getAttribute('src')

        if (src === undefined) {
          throw Error('Some of the iframe tags do not have src set.')
        }

        iframe.setAttribute('data-src', src)
        iframe.removeAttribute('src')
        iframe.classList.add('lazyload')
      })
    }
  }

  processerFunctions.push((iframe) => {
    const width =
      options.iframe.width ?? Number(iframe.getAttribute('width')) ?? 640
    const height =
      options.iframe.height ?? Number(iframe.getAttribute('height')) ?? 360
    iframe.setAttribute('width', width.toString())
    iframe.setAttribute('height', height.toString())
    iframe.setAttribute(
      'style',
      'position: absolute; width: 100%; height: 100%; top: 0; left: 0;'
    )

    const divElement = `<div style="position: relative; padding-bottom: calc(${height} / ${width} * 100%);">${iframe.outerHTML}</div>`

    iframe.insertAdjacentHTML('beforebegin', divElement)
    iframe.remove()
  })

  iframeElements.forEach((iframe) => {
    processerFunctions.forEach((processerFunction) => processerFunction(iframe))
  })
}

export default iframeProcesser
