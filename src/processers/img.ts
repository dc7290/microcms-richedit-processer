import { HTMLElement } from 'node-html-parser'
import requestImageSize from 'request-image-size'
import { buildImgixUrl } from 'ts-imgix'

import { MergedDefaultOptions } from '../processer'

const imgProcesser = async (
  imgElement: HTMLElement,
  options: MergedDefaultOptions
): Promise<void> => {
  const getSrcAttr = () => {
    const src = imgElement.getAttribute('src')
    if (src === undefined) {
      throw Error('Some of the img tags do not have src set.')
    }

    return src
  }

  const splitSrc = getSrcAttr().split('?')

  const size = await requestImageSize(splitSrc[0])
  const imgixUrl = buildImgixUrl(splitSrc[0])(
    Object.assign({}, new URLSearchParams(splitSrc[1]), options.img.parameters)
  )
  imgElement.setAttribute('src', imgixUrl)

  const params = new URLSearchParams(new URL(imgixUrl).search)
  const width = params.get('w')
  const height = params.get('h')

  if (width === null) {
    imgElement.setAttribute('width', size.width)
  } else {
    imgElement.setAttribute('width', width)
  }
  if (height === null) {
    imgElement.setAttribute('height', size.height)
  } else {
    imgElement.setAttribute('height', height)
  }

  if (options.img.addClassName !== undefined) {
    const classNames = options.img.addClassName
    classNames.forEach((className) => {
      imgElement.classList.add(className)
    })
  }

  if (options.img.provider === 'lazysizes') {
    if (options.img.lazy) {
      imgElement.setAttribute('data-src', getSrcAttr())
      imgElement.classList.add('lazyload')
    }

    if (options.img.placeholder) {
      imgElement.setAttribute('src', splitSrc[0] + '?w=50&q=30')
      imgElement.setAttribute('style', 'width: 100%')
    } else {
      imgElement.removeAttribute('src')
    }
  }
}

export default imgProcesser
