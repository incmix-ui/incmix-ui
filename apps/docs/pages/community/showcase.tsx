/* eslint-disable */
import { Stack, Text } from '@incmix-ui/react'

import MDXLayout from 'layouts/mdx'
import { t } from 'utils/i18n'

const Showcase = () => {
  return (
    <MDXLayout
      hideToc
      maxWidth="unset"
      frontmatter={{
        title: t('showcase.seo.title'),
        description: t('showcase.seo.description'),
        slug: '/community/showcase',
      }}
    >
      <Stack align="flex-start" mt="5" spacing="8">
        <Text color="fg-subtle" fontSize={{ base: 'lg', lg: 'xl' }}>
          {t('showcase.message')}
        </Text>
      </Stack>
    </MDXLayout>
  )
}

export default Showcase
