import { GridItem, Heading, List, ListItem, SimpleGrid, Text, VStack } from '@incmix-ui/react'
import { ComponentOverviewItem } from 'components/component-overview-item'
import MDXLayout from 'layouts/mdx'
import type { GetStaticProps } from 'next'
import type { FrontmatterHeading } from 'src/types/frontmatter'
import { getGroupedComponents } from 'utils/contentlayer-utils'

interface Component {
  title: string
  url: string
  id: string
}

interface Category {
  id: string
  title: string
  components: Component[]
}

interface Props {
  categories: Category[]
  headings: FrontmatterHeading[]
}

export const ComponentsOverview = ({ categories, headings }: Props) => {
  return (
    <MDXLayout
      frontmatter={{
        title: 'Components',
        slug: '/docs/components',
        headings,
      }}
    >
      <VStack w="full" mt={5} alignItems="stretch" spacing={12}>
        <Text lineHeight="tall">Overview of the component categories:</Text>
        <List w="full" spacing={12}>
          {categories.map(({ title, components, id }) => (
            <ListItem key={title} display="flex" flexDirection="column" rowGap={6}>
              <Heading as="h2" size="md" id={id} scrollMarginTop={24}>
                {title}
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {components.map(({ title: componentTitle, url, id }) => (
                  <GridItem key={id}>
                    <ComponentOverviewItem url={url} title={componentTitle} slug={id} />
                  </GridItem>
                ))}
              </SimpleGrid>
            </ListItem>
          ))}
          )
        </List>
      </VStack>
    </MDXLayout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const group = getGroupedComponents()

  const categories = Object.entries(group).reduce<Category[]>((acc, item) => {
    const [title, items] = item
    if (title === 'Layout') return acc
    const category: Category = {
      id: title.toLowerCase().replace(/ /g, '-'),
      title,
      components: items.map(({ title, slug, id }) => ({
        id,
        title,
        url: slug,
      })),
    }
    return acc.concat(category)
  }, [])

  const headings = Object.entries(group).reduce<FrontmatterHeading[]>((acc, item) => {
    const [title] = item
    if (title === 'Layout') return acc
    const heading: FrontmatterHeading = {
      id: title.toLowerCase().replace(/ /g, '-'),
      text: title,
      level: 2,
    }
    return acc.concat(heading)
  }, [])

  return {
    props: {
      categories,
      headings,
    },
  }
}

export default ComponentsOverview
