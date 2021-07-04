import { QueryParamsInput } from 'ts-imgix'

type CommonOptinos = {
  disabled?: boolean
  addClassName?: string[]
}

type ImgOptions = CommonOptinos & {
  parameters?: QueryParamsInput
} & (
    | {
        lazy?: false
      }
    | {
        lazy?: true
        placeholder?: boolean
        provider?: 'lazysizes'
      }
  )

type IframeOptions = {
  width?: number
  height?: number
} & (
  | {
      lazy?: false
    }
  | {
      lazy?: true
      provider?: 'lazysizes'
    }
)

type CodeOptions = CommonOptinos & {
  lib?: 'highlight.js'
}

export type ProcesserOptions = {
  img?: ImgOptions
  iframe?: IframeOptions
  code?: CodeOptions
}

export type CreateTableOfContentsOptions = {
  tags?: string
  dataForName?: 'tagName' | false
}
