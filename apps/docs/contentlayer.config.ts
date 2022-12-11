import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkEmoji from 'remark-emoji'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'

import siteConfig from './configs/site-config.json'
import { getTableOfContents } from './src/utils/get-table-of-contents'
import { rehypeMdxCodeMeta } from './src/utils/rehype-code-meta'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: doc => `/${doc._raw.flattenedPath}`,
  },
}

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'docs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string' },
    package: { type: 'string' },
    description: { type: 'string' },
    id: { type: 'string' },
    scope: {
      type: 'enum',
      options: ['usage', 'theming', 'props'],
      default: 'usage',
    },
    version: { type: 'string' },
    author: { type: 'string' },
    video: { type: 'string' },
    category: { type: 'string' },
    aria: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: 'json',
      resolve: doc => ({
        title: doc.title,
        package: doc.package,
        description: doc.description,
        version: doc.version,
        slug: `/${doc._raw.flattenedPath}`,
        editUrl: `${siteConfig.repo.editUrl}/${doc._id}`,
        headings: getTableOfContents(doc.body.raw),
      }),
    },
  },
}))

const Recipe = defineDocumentType(() => ({
  name: 'Recipe',
  filePathPattern: 'community/recipes/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    author: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: 'json',
      resolve: doc => ({
        title: doc.title,
        description: doc.description,
        tags: doc.tags,
        author: doc.author,
        slug: `/community/${doc._raw.flattenedPath}`,
        editUrl: `${siteConfig.repo.editUrl}/${doc._id}`,
        headings: getTableOfContents(doc.body.raw),
      }),
    },
  },
}))

const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Doc, Recipe],
  mdx: {
    rehypePlugins: [rehypeMdxCodeMeta],
    remarkPlugins: [remarkSlug, remarkGfm, remarkEmoji],
  },
})

export default contentLayerConfig
