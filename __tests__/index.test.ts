import { processer } from '../src'

describe('Process the `img`', () => {
  it('lazysizes: normal', () => {
    const initialContent = '<img src="https://sample.com/image.png" alt>'
    const processedContent =
      '<img src="https://sample.com/image.png?w=50&q=30" alt data-src="https://sample.com/image.png" style="width: 100%">'
    const result = processer(initialContent)
    expect(result).toBe(processedContent)
  })
})
