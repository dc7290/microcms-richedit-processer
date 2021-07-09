import fetch from 'node-fetch'
import { HTMLElement } from 'node-html-parser'
import sizeOf from 'image-size'
import { buildImgixUrl } from 'ts-imgix'

import { MergedDefaultOptions } from '../processer'

const imgProcesser = async (
  imgElement: HTMLElement,
  options: MergedDefaultOptions
): Promise<void> => {
  if (options.img.addAttributes !== undefined) {
    const attributes = options.img.addAttributes
    Object.keys(attributes).forEach((key) => {
      imgElement.setAttribute(key, attributes[key])
    })
  }

  const getSrcAttr = () => {
    const src = imgElement.getAttribute('src')
    if (src === undefined) {
      throw Error('Some of the img tags do not have src set.')
    }

    return src
  }

  const splitSrc = getSrcAttr().split('?')

  const size = sizeOf(await fetch(splitSrc[0]).then((res) => res.buffer()))
  const imgixParams = Object.assign(
    {},
    new URLSearchParams(splitSrc[1]),
    options.img.parameters
  )
  const imgixUrl = buildImgixUrl(splitSrc[0])(imgixParams)

  const params = new URLSearchParams(new URL(imgixUrl).search)
  const width = params.get('w')
  const height = params.get('h')

  const srcset = options.img.deviceSizes
    .map((size) => {
      const imgixParamsForSrcSet = Object.assign(imgixParams, {
        w: size.toString(),
        h: undefined,
      })

      if (width !== null && height !== null) {
        Object.assign(imgixParamsForSrcSet, {
          h: Math.round(size * (Number(height) / Number(width))).toString(),
        })
      }

      return `${buildImgixUrl(splitSrc[0])(imgixParamsForSrcSet)} ${size}w`
    })
    .join(', ')

  imgElement.setAttribute('src', imgixUrl)
  imgElement.setAttribute('srcset', srcset)
  imgElement.setAttribute('sizes', options.img.sizes)

  if (width === null) {
    imgElement.setAttribute('width', size.width?.toString() ?? '')
  } else {
    imgElement.setAttribute('width', width)
  }
  if (height === null) {
    imgElement.setAttribute('height', size.height?.toString() ?? '')
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
      imgElement.setAttribute(
        'data-srcset',
        imgElement.getAttribute('srcset') ?? ''
      )
      imgElement.setAttribute(
        'data-sizes',
        imgElement.getAttribute('sizes') ?? ''
      )
      imgElement.removeAttribute('srcset')
      imgElement.removeAttribute('sizes')
      imgElement.classList.add('lazyload')

      if (options.img.placeholder) {
        imgElement.setAttribute(
          'data-lowsrc',
          splitSrc[0] + '?w=50&q=30&blur=10'
        )
        imgElement.removeAttribute('data-src')
      }

      imgElement.removeAttribute('src')
    }
  }
}

export default imgProcesser
