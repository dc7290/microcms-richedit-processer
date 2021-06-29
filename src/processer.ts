import merge from 'deepmerge'
import { parse } from 'node-html-parser'

import { Options } from './types'

const defaultOptions: Options = {
  img: {
    lazy: true,
    placeholder: true,
    provider: 'lazysizes',
  },
  iframe: {
    lazy: true,
    provider: 'lazysizes',
  },
}

const processer = (content: string, options: Options = {}): string => {
  const processOptions = merge(defaultOptions, options)
  const root = parse(content)

  if (processOptions.img.lazy) {
    const imgElements = root.querySelectorAll('img')
    if (processOptions.img.provider === 'lazysizes') {
      if (processOptions.img.placeholder) {
        imgElements.forEach((img) => {
          const src = img.getAttribute('src')

          if (src === undefined) {
            throw Error('Some of the img tags do not have src set.')
          }

          img.setAttribute('data-src', src)
          img.setAttribute('src', src.split('?')[0] + '?w=50&q=30')
          img.setAttribute('style', 'width: 100%')
        })
      } else {
        imgElements.forEach((img) => {
          const src = img.getAttribute('src')

          if (src === undefined) {
            throw Error('Some of the img tags do not have src set.')
          }

          img.setAttribute('data-src', src)
          img.removeAttribute('src')
        })
      }
    }
  }

  if (processOptions.iframe.lazy) {
    if (processOptions.iframe.provider === 'lazysizes') {
      const iframeElements = root.querySelectorAll('iframe')
      iframeElements.forEach((iframe) => {
        const src = iframe.getAttribute('src')

        if (src === undefined) {
          throw Error('Some of the iframe tags do not have src set.')
        }

        iframe.setAttribute('data-src', src)
        iframe.removeAttribute('src')
      })

      if (processOptions.iframe.width !== undefined) {
        const width = processOptions.iframe.width
        iframeElements.forEach((iframe) => {
          iframe.setAttribute('width', width.toString())
        })
      }

      if (processOptions.iframe.height !== undefined) {
        const height = processOptions.iframe.height
        iframeElements.forEach((iframe) => {
          iframe.setAttribute('height', height.toString())
        })
      }
    }
  }

  return root.toString()
}

export default processer
