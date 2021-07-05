import merge from 'deepmerge'
import { parse } from 'node-html-parser'
import codeProcesser from './processers/code'
import iframeProcesser from './processers/iframe'
import imgProcesser from './processers/img'

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
}

export type MergedDefaultOptions = typeof defaultOptions & ProcesserOptions

const processer = async (
  content: string,
  options: ProcesserOptions = {}
): Promise<string> => {
  const processOptions = merge(defaultOptions, options, {
    arrayMerge: (_, sourceArray) => sourceArray,
  })

  const root = parse(content)

  if (processOptions.img.enabled) {
    await Promise.all(
      root
        .querySelectorAll('img')
        .map((imgElement) => imgProcesser(imgElement, processOptions))
    )
  }

  if (processOptions.iframe.enabled) {
    await Promise.all(
      root
        .querySelectorAll('iframe')
        .map((iframeElement) => iframeProcesser(iframeElement, processOptions))
    )
  }

  if (processOptions.code.enabled) {
    await Promise.all(
      root
        .querySelectorAll('pre code')
        .map((codeElement) => codeProcesser(codeElement, processOptions))
    )
  }

  return root.toString()
}

export default processer
