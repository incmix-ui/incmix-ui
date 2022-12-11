// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

// export type Image = string
export type { Markdown, MDX }

/** Document types */
export type Doc = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Doc'
  title?: string | undefined
  package?: string | undefined
  description?: string | undefined
  id?: string | undefined
  scope: 'usage' | 'theming' | 'props'
  version?: string | undefined
  author?: string | undefined
  video?: string | undefined
  category?: string | undefined
  aria?: string | undefined
  /** MDX file body */
  body: MDX
  slug: string
  frontMatter: json
}

export type Recipe = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Recipe'
  title: string
  description: string
  tags?: string[] | undefined
  author?: string | undefined
  /** MDX file body */
  body: MDX
  slug: string
  frontMatter: json
}

/** Nested types */

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Doc | Recipe
export type DocumentTypeNames = 'Doc' | 'Recipe'

export type NestedTypes = never
export type NestedTypeNames = never

export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Doc: Doc
  Recipe: Recipe
}

export type NestedTypeMap = {}
