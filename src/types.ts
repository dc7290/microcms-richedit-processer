type ImgOptions =
  | {
      lazy?: false
    }
  | {
      lazy?: true
      placeholder?: boolean
      provider?: 'lazysizes'
    }

export type Options = {
  img?: ImgOptions
}
