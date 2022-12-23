// @ts-nocheck
import PageContainer from 'components/page-container'
import Pagination from 'components/pagination'
import Sidebar from 'components/sidebar/sidebar'
import communitySidebar from 'configs/community.sidebar.json'
import componentsSidebar from 'configs/components.sidebar.json'
import hooksSidebar from 'configs/hooks.sidebar.json'
import styledSystemSidebar from 'configs/styled-system.sidebar.json'
import { ReactNode } from 'react'
import { Frontmatter } from 'src/types/frontmatter'
import { findRouteByPath, removeFromLast } from 'utils/find-route-by-path'
import { getRouteContext, RouteItem } from 'utils/get-route-context'

export function getRoutes(slug: string): RouteItem[] {
  // for home page, use docs sidebar

  const configMap = {
    '/getting-started': componentsSidebar,
    '/docs/styled-system': styledSystemSidebar,
    '/docs/hooks': hooksSidebar,
    '/docs/components': componentsSidebar,
    '/community': communitySidebar,
  }

  const [, sidebar] = Object.entries(configMap).find(([path]) => slug.startsWith(path)) ?? []

  const routes = sidebar?.routes ?? []
  return routes as RouteItem[]
}

interface MDXLayoutProps {
  frontmatter: Frontmatter
  children: ReactNode
  hideToc?: boolean
  maxWidth?: string
}

export default function MDXLayout(props: MDXLayoutProps) {
  const { frontmatter, children, hideToc, maxWidth } = props

  const routes = getRoutes(frontmatter.slug)
  const route = findRouteByPath(removeFromLast(frontmatter.slug, '#'), routes)
  const routeContext = getRouteContext(route, routes)

  return (
    <PageContainer
      hideToc={hideToc}
      maxWidth={maxWidth}
      frontmatter={frontmatter}
      leftSidebar={<Sidebar routes={routes} />}
      pagination={<Pagination next={routeContext.nextRoute} previous={routeContext.prevRoute} />}
    >
      {children}
    </PageContainer>
  )
}
