import { createTableOfContents } from '../src'

const content =
  '<h1 id="hkY7o3DlYB2">What is Lorem Ipsum?</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><h2 id="h4AL9B4qAV6">Where does it come from?</h2><p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p><h3 id="hBwwL6rm8B7">Why do we use it?</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p> <h4 id="rdAK6TEAQqx">Where can I get some?</h4>'

describe('Create the Table Of Contents', () => {
  it('default', () => {
    const expectedList = [
      { id: 'hkY7o3DlYB2', text: 'What is Lorem Ipsum?', name: 'h1' },
      { id: 'h4AL9B4qAV6', text: 'Where does it come from?', name: 'h2' },
      { id: 'hBwwL6rm8B7', text: 'Why do we use it?', name: 'h3' },
    ]

    const result = createTableOfContents(content)
    expect(result).toStrictEqual(expectedList)
  })

  it('If `tags` is `h2, h4`', () => {
    const expectedList = [
      { id: 'h4AL9B4qAV6', text: 'Where does it come from?', name: 'h2' },
      { id: 'rdAK6TEAQqx', text: 'Where can I get some?', name: 'h4' },
    ]

    const result = createTableOfContents(content, { tags: 'h2, h4' })
    expect(result).toStrictEqual(expectedList)
  })

  it('disabled `dataForName`', () => {
    const expectedList = [
      { id: 'hkY7o3DlYB2', text: 'What is Lorem Ipsum?' },
      { id: 'h4AL9B4qAV6', text: 'Where does it come from?' },
      { id: 'hBwwL6rm8B7', text: 'Why do we use it?' },
    ]

    const result = createTableOfContents(content, { dataForName: false })
    expect(result).toStrictEqual(expectedList)
  })
})
