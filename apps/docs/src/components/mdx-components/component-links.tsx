import { Button, ButtonProps, Link, useColorModeValue, Wrap } from '@incmix-ui/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { t } from 'utils/i18n'

type ComponentLinkProps = ButtonProps & {
  icon: React.ElementType
  url: string
  iconSize?: string
  iconColor?: string
}

function ComponentLink(props: ComponentLinkProps) {
  const { icon: BtnIcon, url, children, iconSize, iconColor, ...rest } = props
  return (
    <Button
      as={Link}
      href={url}
      isExternal
      size="sm"
      fontWeight="normal"
      variant="outline"
      color={useColorModeValue('gray.600', 'whiteAlpha.700')}
      _hover={{
        color: useColorModeValue('gray.700', 'whiteAlpha.900'),
        boxShadow: 'sm',
        transform: 'translateY(-2px)',
        textDecor: 'none',
      }}
      leftIcon={<BtnIcon />}
      sx={{
        '& span': {
          width: iconSize,
        },
        '& svg': {
          color: iconColor,
          width: 'full',
          height: 'auto',
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export type ComponentLinksProps = {
  theme?: { componentName: string }
  github?: { url?: string; package?: string }
  npm?: { package: string }
  storybook?: { url: string }
  video?: { url: string }
}
function ComponentLinks(props: ComponentLinksProps) {
  const { theme, github, npm, storybook, video, ...rest } = props
  const iconColor = useColorModeValue('gray.600', 'inherit')

  const githubRepoUrl = 'https://github.com/incmix-ui/incmix-ui'

  const themeComponentLink = theme && (
    <ComponentLink
      url={`${githubRepoUrl}/tree/main/packages/components/theme/src/components/${theme.componentName}.ts`}
      icon={FaGithub}
      iconColor={iconColor}
      iconSize="1rem"
    >
      {t('component.mdx-components.component-links.view-theme-source')}
    </ComponentLink>
  )

  return (
    <Wrap spacing="3" flexWrap="wrap" overflow="visible" {...rest}>
      {themeComponentLink}
    </Wrap>
  )
}

export default ComponentLinks
