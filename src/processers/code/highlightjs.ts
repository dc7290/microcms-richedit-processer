import hljs from 'highlight.js'

const highlight = (content: string): string => hljs.highlightAuto(content).value

export default highlight
