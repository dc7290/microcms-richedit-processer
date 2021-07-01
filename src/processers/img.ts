import { HTMLElement } from 'node-html-parser'
import { buildImgixUrl } from 'ts-imgix'

import { MergedDefaultOptions } from '../processer'

const imgProcesser = (
  imgElements: HTMLElement[],
  options: MergedDefaultOptions
): void => {
  const processerFunctions: ((img: HTMLElement) => void)[] = []

  const returnSrc = (img: HTMLElement): string => {
    const src = img.getAttribute('src')

    if (src === undefined) {
      throw Error('Some of the img tags do not have src set.')
    }

    return src
  }

  processerFunctions.push((img: HTMLElement) => {
    const splitSrc = returnSrc(img).split('?')
    img.setAttribute(
      'src',
      splitSrc.length === 1
        ? buildImgixUrl(splitSrc[0])(options.img.parameters)
        : buildImgixUrl(splitSrc[0])(options.img.parameters) + '&' + splitSrc[1]
    )
  })

  if (options.img.provider === 'lazysizes') {
    if (options.img.lazy) {
      processerFunctions.push((img: HTMLElement) => {
        img.setAttribute('data-src', returnSrc(img))
        img.classList.add('lazyload')
      })
    }

    if (options.img.placeholder) {
      processerFunctions.push((img) => {
        img.setAttribute('src', returnSrc(img).split('?')[0] + '?w=50&q=30')
        img.setAttribute('style', 'width: 100%')
      })
    } else {
      processerFunctions.push((img) => {
        img.removeAttribute('src')
      })
    }
  }

  imgElements.forEach((img) => {
    processerFunctions.forEach((processeFunction) => processeFunction(img))
  })
}

export default imgProcesser
