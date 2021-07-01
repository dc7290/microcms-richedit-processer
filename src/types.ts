import { QueryParamsInput } from 'ts-imgix'

type ImgOptions = {
  parameters?: QueryParamsInput
  addClassName?: string[]
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
  addClassName?: string[]
} & (
  | {
      lazy?: false
    }
  | {
      lazy?: true
      provider?: 'lazysizes'
    }
)
export type ProcesserOptions = {
  img?: ImgOptions
  iframe?: IframeOptions
}

export type CreateTableOfContentsOptions = {
  tags?: string
  dataForName?: 'tagName' | false
}
