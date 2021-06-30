import merge from 'deepmerge'
import { parse } from 'node-html-parser'

import type { CreateTableOfContentsOptions } from './types'

const defaultOptions: CreateTableOfContentsOptions = {
  tags: 'h1, h2, h3',
  dataForName: 'tagName',
}

function createTableOfContents(
  content: string,
  options?: CreateTableOfContentsOptions
): {
  id: string
  text: string
  name: string
}[]

function createTableOfContents(
  content: string,
  options: CreateTableOfContentsOptions & { dataForName: false }
): {
  id: string
  text: string
}[]

function createTableOfContents(
  content: string,
  options: CreateTableOfContentsOptions = {}
): {
  id: string
  text: string
  name?: string
}[] {
  const createTocOptions = merge(defaultOptions, options)

  const root = parse(content)
  const headingElements = root.querySelectorAll(createTocOptions.tags)

  if (createTocOptions.dataForName === 'tagName') {
    return headingElements.map((heading) => ({
      id: heading.id,
      text: heading.textContent,
      name: heading.tagName.toLowerCase(),
    }))
  }

  return headingElements.map((heading) => ({
    id: heading.id,
    text: heading.textContent,
  }))
}

export default createTableOfContents
