import type { MarkdownRenderer } from 'vitepress'

export default function (md: MarkdownRenderer) {
  const fence = md.renderer.rules.fence!
  if (!fence)
    return

  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args
    const token = tokens[idx]
    if (token && token.tag === 'code') {
      const title = token.info.match(/title="([^"]+)"/)?.[1] ?? null
      console.log(title)

      return (
        `<div data-code-block-plugin>
        ${title ? `<div data-code-block-title>${title}</div>` : ''}
        ${fence(...args)}
        </div>`
      )
    }

    // If not a code block, return the default rendering
    return fence(...args)
  }
}
