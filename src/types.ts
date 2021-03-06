import { QueryParamsInput } from 'ts-imgix'

type CommonOptinos = {
  enabled?: boolean
  addClassName?: string[]
  addAttributes?: Record<string, string>
}

type ImgOptions = CommonOptinos & {
  parameters?: QueryParamsInput
  deviceSizes?: number[]
  sizes?: string
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

type IframeOptions = CommonOptinos & {
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

export type OtherElementsOptions = Pick<
  CommonOptinos,
  'addAttributes' | 'addClassName'
>

export type ProcesserOptions = {
  img?: ImgOptions
  iframe?: IframeOptions
  code?: CodeOptions
  otherElements?: Partial<
    Record<keyof JSX.IntrinsicElements, OtherElementsOptions>
  >
}

export type CreateTableOfContentsOptions = {
  tags?: string
  dataForName?: 'tagName' | false
}
