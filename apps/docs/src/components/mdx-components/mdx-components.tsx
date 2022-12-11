/* eslint-disable */
import * as Incmix from '@incmix-ui/react'
import { ColorPalette, ColorPalettes, ColorWrapper } from 'components/color-palette'

import { FeaturesOverview } from 'components/features-overview'
import { FrameworkLinks } from 'components/framework-link'
import { Anchor } from 'components/mdx-components/anchor'
import { InlineCode } from 'components/mdx-components/inline-code'
import { LinkedHeading } from 'components/mdx-components/linked-heading'
import { Pre } from 'components/mdx-components/pre'
import { Table, TData, THead } from 'components/mdx-components/table'
import { VideoPlayer } from 'components/mdx-components/video-player'
import * as React from 'react'

import PropsTable from '../props-table'
import CodeBlock from './codeblock/codeblock'
import ComponentLinks from './component-links'
import IconsList from './icons-list'

const { incmix, Kbd, Link } = Incmix

export const MDXComponents = {
  ...Incmix,

  h1: props => <incmix.h1 apply="mdx.h1" {...props} />,
  h2: props => <LinkedHeading apply="mdx.h2" {...props} />,
  h3: props => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  h4: props => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
  hr: props => <incmix.hr apply="mdx.hr" {...props} />,
  code: InlineCode,
  pre: props => {
    if (typeof props.children === 'string') return <Pre {...props} />
    if (props.children.props.type === 'tutorial') {
      const className = props.children.props.className || ''
      const code = props.children.props.children.trim() || ''
      const language = className.replace(/language-/, '')
      return null
    }
    return <CodeBlock {...props} />
  },
  kbd: Kbd,
  table: Table,
  th: THead,
  td: TData,
  a: Anchor,
  p: props => <incmix.p apply="mdx.p" {...props} />,
  ul: props => <incmix.ul apply="mdx.ul" {...props} />,
  ol: props => <incmix.ol apply="mdx.ul" {...props} />,
  li: props => <incmix.li pb="4px" {...props} />,

  ComponentLinks,
  IconsList,
  PropsTable,
  FrameworkLinks,
  VideoPlayer,
  ColorPalette,
  ColorPalettes,
  ColorWrapper,
  FeaturesOverview,
}
