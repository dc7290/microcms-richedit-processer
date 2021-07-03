import { processer } from '../src'

describe('Process the `img`', () => {
  it('with addClassName', () => {
    const initialContent = '<img src="https://sample.com/image.png" alt>'
    const processedContent =
      '<img alt class="class01 class02 lazyload" data-src="https://sample.com/image.png?auto=format">'
    const result = processer(initialContent, {
      img: { addClassName: ['class01', 'class02'] },
    })
    expect(result).toBe(processedContent)
  })

  it('with parameters', () => {
    const initialContent = '<img src="https://sample.com/image.png" alt>'
    const processedContent =
      '<img alt width="800" height="600" data-src="https://sample.com/image.png?auto=format&w=800&h=600&q=50" class="lazyload">'
    const result = processer(initialContent, {
      img: { parameters: { q: 50, w: 800, h: 600 } },
    })
    expect(result).toBe(processedContent)
  })

  it('lazysizes: normal', () => {
    const initialContent = '<img src="https://sample.com/image.png" alt>'
    const processedContent =
      '<img alt data-src="https://sample.com/image.png?auto=format" class="lazyload">'
    const result = processer(initialContent)
    expect(result).toBe(processedContent)
  })

  it('lazysizes: placeholder enabled', () => {
    const initialContent = '<img src="https://sample.com/image.png" alt>'
    const processedContent =
      '<img src="https://sample.com/image.png?w=50&q=30" alt data-src="https://sample.com/image.png?auto=format" class="lazyload" style="width: 100%">'
    const result = processer(initialContent, { img: { placeholder: true } })
    expect(result).toBe(processedContent)
  })
})

describe('Process the `iframe`', () => {
  it('default', () => {
    const initialContent =
      '<iframe src="https://sample.com" width="854" height="480" scrolling="no" frameborder="0"></iframe>'
    const processedContent =
      '<div style="position: relative; padding-bottom: calc(480 / 854 * 100%);"><iframe width="854" height="480" scrolling="no" frameborder="0" data-src="https://sample.com" class="lazyload" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;"></iframe></div>'
    const result = processer(initialContent)
    expect(result).toBe(processedContent)
  })

  it('with addClassName', () => {
    const initialContent =
      '<iframe src="https://sample.com" width="854" height="480" scrolling="no" frameborder="0"></iframe>'
    const processedContent =
      '<div style="position: relative; padding-bottom: calc(480 / 854 * 100%);"><iframe width="854" height="480" scrolling="no" frameborder="0" class="class01 class02 lazyload" data-src="https://sample.com" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;"></iframe></div>'
    const result = processer(initialContent, {
      iframe: { addClassName: ['class01', 'class02'] },
    })
    expect(result).toBe(processedContent)
  })

  it('with width and height', () => {
    const initialContent =
      '<iframe src="https://sample.com" width="854" height="480" scrolling="no" frameborder="0"></iframe>'
    const processedContent =
      '<div style="position: relative; padding-bottom: calc(640 / 960 * 100%);"><iframe width="960" height="640" scrolling="no" frameborder="0" data-src="https://sample.com" class="lazyload" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;"></iframe></div>'
    const result = processer(initialContent, {
      iframe: { width: 960, height: 640 },
    })
    expect(result).toBe(processedContent)
  })

  it('lazysizes: normal', () => {
    const initialContent =
      '<iframe src="https://sample.com" width="854" height="480" scrolling="no" frameborder="0"></iframe>'
    const processedContent =
      '<div style="position: relative; padding-bottom: calc(480 / 854 * 100%);"><iframe width="854" height="480" scrolling="no" frameborder="0" data-src="https://sample.com" class="lazyload" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;"></iframe></div>'
    const result = processer(initialContent)
    expect(result).toBe(processedContent)
  })
})
