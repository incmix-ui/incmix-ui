// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require('next-contentlayer')
const withTM = require('next-transpile-modules')(['@incmix-ui/react', '@incmix-ui/button', '@incmix-ui/theme'])

const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
  },
})
const mdx = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
module.exports = withPlugins([mdx, withTM, withContentlayer])
