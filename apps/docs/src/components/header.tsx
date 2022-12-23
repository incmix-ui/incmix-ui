/* eslint-disable */
// @ts-nocheck
import {
  Box,
  incmix,
  Flex,
  HStack,
  HTMLIncmixProps,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useUpdateEffect,
} from '@incmix-ui/react'
import { useViewportScroll } from 'framer-motion'
import NextLink from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

import Logo, { LogoIcon } from './logo'
import { MobileNavButton, MobileNavContent } from './mobile-nav'
import Search from './omni-search'

function HeaderContent() {
  const mobileNav = useDisclosure()

  const { toggleColorMode: toggleMode } = useColorMode()

  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const mobileNavBtnRef = useRef<HTMLButtonElement>()

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  return (
    <>
      <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
        <Flex align="center">
          <NextLink href="/" passHref>
            <incmix.a display="block" aria-label="Incmix UI, Back to homepage">
              <Box minW="3rem" display={{ base: 'block', md: 'none' }}>
                <LogoIcon />
              </Box>
            </incmix.a>
          </NextLink>
        </Flex>

        <Flex justify="flex-end" w="100%" align="center" color="gray.400" maxW="1100px">
          <Search />
          <HStack spacing="5" display={{ base: 'none', md: 'flex' }}></HStack>
          <HStack spacing="5">
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: '0', md: '3' }}
              onClick={toggleMode}
              icon={<SwitchIcon />}
            />

            <MobileNavButton ref={mobileNavBtnRef} aria-label="Open Menu" onClick={mobileNav.onOpen} />
          </HStack>
        </Flex>
      </Flex>
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </>
  )
}

function Header(props: HTMLIncmixProps<'header'>) {
  const { maxW = '8xl', maxWidth = '8xl' } = props
  const ref = useRef<HTMLHeadingElement>()
  const [y, setY] = useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  const { scrollY } = useViewportScroll()
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  return (
    <incmix.header
      ref={ref}
      shadow={y > height ? 'sm' : undefined}
      transition="box-shadow 0.2s, background-color 0.2s"
      pos="sticky"
      top="0"
      zIndex="3"
      bg="white"
      _dark={{ bg: 'gray.800' }}
      left="0"
      right="0"
      width="full"
      {...props}
    >
      <incmix.div height="4.5rem" mx="auto" maxW={maxW} maxWidth={maxWidth}>
        <HeaderContent />
      </incmix.div>
    </incmix.header>
  )
}

export default Header
