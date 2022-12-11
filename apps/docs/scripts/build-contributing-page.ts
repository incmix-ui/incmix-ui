import fs from 'fs'
import path from 'path'

function main() {
  const contributingFile = fs.readFileSync(path.join(process.cwd(), 'CONTRIBUTING.md')).toString()

  const mdxCompleteFile = `---
title: Contributing to Incmix UI
description:
  'Thanks for being interested in contributing! We want contributing to Incmix
  UI to be enjoyable, and educational for anyone and everyone'
tags: ['contributing']
---

${contributingFile}`

  fs.writeFileSync(path.join(process.cwd(), 'content', 'components', 'components.mdx'), mdxCompleteFile)
}

main()
