import { processer } from '../src'

describe('Process the `img`', () => {
  it('default', async () => {
    const initialContent =
      '<img src="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png" alt>'
    const processedContent =
      '<img alt width="1418" height="692" data-src="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format" data-srcset="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=640 640w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=750 750w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=828 828w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1080 1080w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1200 1200w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1920 1920w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=2048 2048w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=3840 3840w" data-sizes="100vw" class="lazyload">'
    const result = await processer(initialContent)
    expect(result).toBe(processedContent)
  })

  it('change deviceSizes', async () => {
    const initialContent =
      '<img src="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png" alt>'
    const processedContent =
      '<img alt width="1418" height="692" data-src="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format" data-srcset="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=640 640w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1280 1280w" data-sizes="(min-width: 640px) 1000px, 100vw" class="lazyload">'
    const result = await processer(initialContent, {
      img: {
        deviceSizes: [640, 1280],
        sizes: '(min-width: 640px) 1000px, 100vw',
      },
    })
    expect(result).toBe(processedContent)
  })

  it('with addAttribute', async () => {
    const initialContent =
      '<img src="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png" alt>'
    const processedContent =
      '<img alt aria-label="sampleLabel" width="1418" height="692" data-src="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format" data-srcset="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=640 640w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=750 750w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=828 828w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1080 1080w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1200 1200w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1920 1920w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=2048 2048w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=3840 3840w" data-sizes="100vw" class="lazyload">'
    const result = await processer(initialContent, {
      img: { addAttributes: { 'aria-label': 'sampleLabel' } },
    })
    expect(result).toBe(processedContent)
  })

  it('with addClassName', async () => {
    const initialContent =
      '<img src="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png" alt>'
    const processedContent =
      '<img alt width="1418" height="692" class="class01 class02 lazyload" data-src="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format" data-srcset="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=640 640w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=750 750w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=828 828w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1080 1080w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1200 1200w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1920 1920w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=2048 2048w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=3840 3840w" data-sizes="100vw">'
    const result = await processer(initialContent, {
      img: { addClassName: ['class01', 'class02'] },
    })
    expect(result).toBe(processedContent)
  })

  it('with parameters', async () => {
    const initialContent =
      '<img src="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png" alt>'
    const processedContent =
      '<img alt width="800" height="600" data-src="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=800&h=600&q=50" data-srcset="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=640&h=480&q=50 640w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=750&h=563&q=50 750w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=828&h=621&q=50 828w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1080&h=810&q=50 1080w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1200&h=900&q=50 1200w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1920&h=1440&q=50 1920w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=2048&h=1536&q=50 2048w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=3840&h=2880&q=50 3840w" data-sizes="100vw" class="lazyload">'
    const result = await processer(initialContent, {
      img: { parameters: { q: 50, w: 800, h: 600 } },
    })
    expect(result).toBe(processedContent)
  })

  it('lazysizes: placeholder enabled', async () => {
    const initialContent =
      '<img src="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png" alt>'
    const processedContent =
      '<img alt width="1418" height="692" data-srcset="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=640 640w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=750 750w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=828 828w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1080 1080w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1200 1200w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=1920 1920w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=2048 2048w, https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?auto=format&w=3840 3840w" data-sizes="100vw" class="lazyload" data-lowsrc="https://images.microcms-assets.io/assets/570d780f99564ac388af70056e0f8212/9b473a3323c5492494e0b2e3ad62fa11/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-07-02%200.09.11.png?w=50&q=30&blur=10">'
    const result = await processer(initialContent, {
      img: { placeholder: true },
    })
    expect(result).toBe(processedContent)
  })
})

describe('Process the `iframe`', () => {
  it('default', async () => {
    const initialContent =
      '<iframe src="https://sample.com" width="854" height="480" scrolling="no" frameborder="0"></iframe>'
    const processedContent =
      '<div style="position: relative; padding-bottom: calc(480 / 854 * 100%);"><iframe width="854" height="480" scrolling="no" frameborder="0" data-src="https://sample.com" class="lazyload" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;"></iframe></div>'
    const result = await processer(initialContent)
    expect(result).toBe(processedContent)
  })

  it('with addClassName', async () => {
    const initialContent =
      '<iframe src="https://sample.com" width="854" height="480" scrolling="no" frameborder="0"></iframe>'
    const processedContent =
      '<div style="position: relative; padding-bottom: calc(480 / 854 * 100%);"><iframe width="854" height="480" scrolling="no" frameborder="0" class="class01 class02 lazyload" data-src="https://sample.com" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;"></iframe></div>'
    const result = await processer(initialContent, {
      iframe: { addClassName: ['class01', 'class02'] },
    })
    expect(result).toBe(processedContent)
  })

  it('with width and height', async () => {
    const initialContent =
      '<iframe src="https://sample.com" width="854" height="480" scrolling="no" frameborder="0"></iframe>'
    const processedContent =
      '<div style="position: relative; padding-bottom: calc(640 / 960 * 100%);"><iframe width="960" height="640" scrolling="no" frameborder="0" data-src="https://sample.com" class="lazyload" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;"></iframe></div>'
    const result = await processer(initialContent, {
      iframe: { width: 960, height: 640 },
    })
    expect(result).toBe(processedContent)
  })

  it('lazysizes: normal', async () => {
    const initialContent =
      '<iframe src="https://sample.com" width="854" height="480" scrolling="no" frameborder="0"></iframe>'
    const processedContent =
      '<div style="position: relative; padding-bottom: calc(480 / 854 * 100%);"><iframe width="854" height="480" scrolling="no" frameborder="0" data-src="https://sample.com" class="lazyload" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;"></iframe></div>'
    const result = await processer(initialContent)
    expect(result).toBe(processedContent)
  })
})

describe('Process the `pre code`', () => {
  it('highlight.js', async () => {
    const initialContent =
      '<pre><code>import { AppProps } from &#x27;next&#x2F;app&#x27;\n\nconst MyApp = ({ Component, pageProps }: AppProps): JSX.Element =&gt; {\n  return &lt;Component {...pageProps} &#x2F;&gt;\n}\n\nexport default MyApp</code></pre>'
    const processedContent =
      '<pre><code class="hljs"><span class="hljs-keyword">import</span> { AppProps } from <span class="hljs-string">&#x27;next/app&#x27;</span>\n\n<span class="hljs-keyword">const</span> MyApp = ({ Component, pageProps }: AppProps): JSX.<span class="hljs-built_in">Element</span> =&gt; {\n  <span class="hljs-keyword">return</span> &lt;Component {...pageProps} /&gt;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> MyApp</code></pre>'
    const result = await processer(initialContent, {
      code: { enabled: true },
    })
    expect(result).toBe(processedContent)
  })
})

describe('Process the `other elements`', () => {
  it('anchor element', async () => {
    const initialContent = '<a href="/about">To About Page</a>'
    const processedContent =
      '<a href="/about" target="_blank" rel="noreferrer">To About Page</a>'
    const result = await processer(initialContent, {
      otherElements: {
        a: {
          addAttributes: {
            target: '_blank',
            rel: 'noreferrer',
          },
        },
      },
    })
    expect(result).toBe(processedContent)
  })
})
