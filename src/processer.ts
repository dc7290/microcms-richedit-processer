import { parse } from 'node-html-parser'

import { Options } from './types'

const processer = (
  content: string,
  options: Options = {
    img: {
      lazy: true,
      placeholder: true,
      provider: 'lazysizes',
    },
  }
): string => {
  const root = parse(content)

  if (options.img?.lazy === true) {
    const imgElements = root.querySelectorAll('img')
    if (options.img.provider === 'lazysizes') {
      if (options.img.placeholder) {
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

  return root.toString()
}

export default processer
