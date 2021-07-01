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
    const src = returnSrc(img)
    const splitSrc = src.split('?')

    const imgixUrl =
      splitSrc.length === 1
        ? buildImgixUrl(splitSrc[0])(options.img.parameters)
        : buildImgixUrl(splitSrc[0])(options.img.parameters) + '&' + splitSrc[1]
    img.setAttribute('src', imgixUrl)

    const url = new URL(imgixUrl)
    const params = new URLSearchParams(url.search)
    const width = params.get('w')
    const height = params.get('h')
    if (width !== null) {
      img.setAttribute('width', width)
    }
    if (height !== null) {
      img.setAttribute('height', height)
    }
  })

  if (options.img.addClassName !== undefined) {
    const classNames = options.img.addClassName
    processerFunctions.push((img: HTMLElement) => {
      classNames.forEach((className) => {
        img.classList.add(className)
      })
    })
  }

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
