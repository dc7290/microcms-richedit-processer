import merge from 'deepmerge'
import { parse } from 'node-html-parser'
import codeProcesser from './processers/code'
import iframeProcesser from './processers/iframe'
import imgProcesser from './processers/img'
import otherElementsProcesser from './processers/other-elements'

import { ProcesserOptions } from './types'

const defaultOptions = {
  img: {
    parameters: {
      auto: {
        format: true,
      },
    },
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    sizes: '100vw',
    enabled: true,
    lazy: true,
    placeholder: false,
    provider: 'lazysizes',
  },
  iframe: {
    enabled: true,
    lazy: true,
    provider: 'lazysizes',
  },
  code: {
    enabled: false,
    lib: 'highlight.js',
  },
  otherElements: {},
}

export type MergedDefaultOptions = typeof defaultOptions & ProcesserOptions

const processer = async (
  content: string,
  options: ProcesserOptions = {}
): Promise<string> => {
  const processOptions = merge(defaultOptions, options, {
    arrayMerge: (_, sourceArray) => sourceArray,
  })

  const root = parse(content, {
    blockTextElements: {
      code: true,
    },
  })

  if (processOptions.img.enabled) {
    await Promise.all(
      root
        .querySelectorAll('img')
        .map(
          async (imgElement) => await imgProcesser(imgElement, processOptions)
        )
    )
  }

  if (processOptions.iframe.enabled) {
    await Promise.all(
      root
        .querySelectorAll('iframe')
        .map(
          async (iframeElement) =>
            await iframeProcesser(iframeElement, processOptions)
        )
    )
  }

  if (processOptions.code.enabled) {
    await Promise.all(
      root
        .querySelectorAll('pre code')
        .map(
          async (codeElement) =>
            await codeProcesser(codeElement, processOptions)
        )
    )
  }

  if (Object.keys(processOptions.otherElements).length !== 0) {
    ;(
      Object.keys(
        processOptions.otherElements
      ) as (keyof JSX.IntrinsicElements)[]
    ).forEach((key) => {
      root.querySelectorAll(key).forEach((element) => {
        otherElementsProcesser(element, processOptions.otherElements[key] ?? {})
      })
    })
  }

  return root.toString()
}

export default processer
