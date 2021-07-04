import { HTMLElement } from 'node-html-parser'

import { MergedDefaultOptions } from '../processer'

const iframeProcesser = async (
  iframeElement: HTMLElement,
  options: MergedDefaultOptions
): Promise<void> => {
  if (options.iframe.addClassName !== undefined) {
    const classNames = options.iframe.addClassName
    classNames.forEach((className) => {
      iframeElement.classList.add(className)
    })
  }

  if (options.iframe.provider === 'lazysizes') {
    if (options.iframe.lazy) {
      const src = iframeElement.getAttribute('src')

      if (src === undefined) {
        throw Error('Some of the iframe tags do not have src set.')
      }

      iframeElement.setAttribute('data-src', src)
      iframeElement.removeAttribute('src')
      iframeElement.classList.add('lazyload')
    }
  }

  const width =
    options.iframe.width ?? Number(iframeElement.getAttribute('width')) ?? 640
  const height =
    options.iframe.height ?? Number(iframeElement.getAttribute('height')) ?? 360
  iframeElement.setAttribute('width', width.toString())
  iframeElement.setAttribute('height', height.toString())
  iframeElement.setAttribute(
    'style',
    'position: absolute; width: 100%; height: 100%; top: 0; left: 0;'
  )

  const divElement = `<div style="position: relative; padding-bottom: calc(${height} / ${width} * 100%);">${iframeElement.outerHTML}</div>`

  iframeElement.insertAdjacentHTML('beforebegin', divElement)
  iframeElement.remove()
}

export default iframeProcesser
