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

const processer = (content: string, options: ProcesserOptions = {}): string => {
  const processOptions = merge(defaultOptions, options)

  const root = parse(content)

  if (!processOptions.img.disabled) {
    imgProcesser(root.querySelectorAll('img'), processOptions)
  }

  if (!processOptions.iframe.disabled) {
    iframeProcesser(root.querySelectorAll('iframe'), processOptions)
  }

  if (!processOptions.code.disabled) {
    codeProcesser(root.querySelectorAll('pre code'), processOptions)
  }

  return root.toString()
}

export default processer
