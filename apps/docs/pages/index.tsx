import { Box, Button, Stack } from '@incmix-ui/react'
import Container from 'components/container'
import Header from 'components/header'
import NextLink from 'next/link'
import * as React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const HomePage = () => {
  return (
    <>
      <Header />
      <Box mb={20}>
        <Box as="section" pt="6rem" pb={{ base: '0', md: '5rem' }}>
          <Container>
            <Box textAlign="center">
              <Stack mt="10" spacing="4" justify="center" direction={{ base: 'column', sm: 'row' }}>
                <NextLink href="/docs/components" passHref>
                  <Button
                    h="4rem"
                    px="40px"
                    fontSize="1.2rem"
                    as="a"
                    size="lg"
                    colorScheme="teal"
                    rightIcon={<FaArrowRight fontSize="0.8em" />}
                  >
                    Components
                  </Button>
                </NextLink>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default HomePage
