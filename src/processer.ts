import merge from 'deepmerge'
import { parse } from 'node-html-parser'
import iframeProcesser from './processers/iframe'
import imgProcesser from './processers/img'

import { ProcesserOptions } from './types'

const defaultOptions = {
  img: {
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
    lazy: true,
    provider: 'lazysizes',
  },
}

export type MergedDefaultOptions = typeof defaultOptions & ProcesserOptions

const processer = (content: string, options: ProcesserOptions = {}): string => {
  const processOptions = merge(defaultOptions, options)

  const root = parse(content)

  imgProcesser(root.querySelectorAll('img'), processOptions)
  iframeProcesser(root.querySelectorAll('iframe'), processOptions)

  return root.toString()
}

export default processer
