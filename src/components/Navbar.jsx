import { Button, Center, Container, Flex, Heading, HStack, IconButton, Spacer, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin, FaGit } from 'react-icons/fa'

export default function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode ==='dark'

  return (
    <>
      <VStack p={5}>
        <Flex w="100%" gap="3">
          <Spacer />
          <IconButton icon={<FaLinkedin />} isRound="true" onClick={""} />
          <IconButton icon={<FaInstagram />} isRound="true" onClick={""} />
          <IconButton icon={<FaGithub />} isRound="true" onClick={""} />
          <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} />
        </Flex>
      
      </VStack>
      <Container>
        <Center>
          <Flex gap="12">
            <Heading as="h2" size="h2">About</Heading>
            <Heading as="h2" size="h2">Projects</Heading>
            <Heading as="h2" size="h2">Work Experience</Heading>
            <Heading as="h2" size="h2">Contact</Heading>
          </Flex>
        </Center>
        
      </Container>
    </>
  )
}

