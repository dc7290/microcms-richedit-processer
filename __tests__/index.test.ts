import { processer } from '../src'

describe('Process the `img`', () => {
  it('lazysizes: normal', () => {
    const initialContent = '<img src="https://sample.com/image.png" alt>'
    const processedContent =
      '<img src="https://sample.com/image.png?w=50&q=30" alt data-src="https://sample.com/image.png" style="width: 100%">'
    const result = processer(initialContent)
    expect(result).toBe(processedContent)
  })

  it('lazysizes: placeholder disabled', () => {
    const initialContent = '<img src="https://sample.com/image.png" alt>'
    const processedContent = '<img alt data-src="https://sample.com/image.png">'
    const result = processer(initialContent, { img: { placeholder: false } })
    expect(result).toBe(processedContent)
  })
})

describe('Process the `iframe`', () => {
  it('lazysizes: normal', () => {
    const initialContent =
      '<iframe src="https://sample.com" width="854" height="480" scrolling="no" frameborder="0"></iframe>'
    const processedContent =
      '<iframe width="854" height="480" scrolling="no" frameborder="0" data-src="https://sample.com"></iframe>'
    const result = processer(initialContent)
    expect(result).toBe(processedContent)
  })

  it('lazysizes: width and height', () => {
    const initialContent =
      '<iframe src="https://sample.com" width="854" height="480" scrolling="no" frameborder="0"></iframe>'
    const processedContent =
      '<iframe width="960" height="640" scrolling="no" frameborder="0" data-src="https://sample.com"></iframe>'
    const result = processer(initialContent, {
      iframe: { width: 960, height: 640 },
    })
    expect(result).toBe(processedContent)
  })
})
