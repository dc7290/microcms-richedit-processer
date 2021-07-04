import merge from 'deepmerge'
import { parse } from 'node-html-parser'
import codeProcesser from './processers/code'
import iframeProcesser from './processers/iframe'
import imgProcesser from './processers/img'

import { ProcesserOptions } from './types'

const defaultOptions = {
  img: {
    disabled: false,
    lazy: true,
    parameters: {
      auto: {
        format: true,
      },
    },
    placeholder: false,
    provider: 'lazysizes',
  },
  iframe: {
    disabled: false,
    lazy: true,
    provider: 'lazysizes',
  },
  code: {
    disabled: false,
    lib: 'highlight.js',
  },
}

export type MergedDefaultOptions = typeof defaultOptions & ProcesserOptions

const processer = async (
  content: string,
  options: ProcesserOptions = {}
): Promise<string> => {
  const processOptions = merge(defaultOptions, options)

  const root = parse(content)

  if (!processOptions.img.disabled) {
    await Promise.all(
      root
        .querySelectorAll('img')
        .map((imgElement) => imgProcesser(imgElement, processOptions))
    )
  }

  if (!processOptions.iframe.disabled) {
    await Promise.all(
      root
        .querySelectorAll('iframe')
        .map((iframeElement) => iframeProcesser(iframeElement, processOptions))
    )
  }

  if (!processOptions.code.disabled) {
    await Promise.all(
      root
        .querySelectorAll('pre code')
        .map((codeElement) => codeProcesser(codeElement, processOptions))
    )
  }

  return root.toString()
}

export default processer
