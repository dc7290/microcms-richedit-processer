type ImgOptions =
  | {
      lazy?: false
    }
  | {
      lazy?: true
      placeholder?: boolean
      provider?: 'lazysizes'
    }

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
export type Options = {
  img?: ImgOptions
  iframe?: IframeOptions
}
