import { Center, Container, Flex, Text, IconButton, Spacer, useColorMode, VStack } from '@chakra-ui/react'
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode ==='dark'

  return (
    <>
      <VStack p={5}>
        <Flex w="100%" gap="3">
          <Spacer />
          <IconButton icon={<FaLinkedin />} isRound="true" onClick={""} />
          <IconButton icon={<FaFacebook />} isRound="true" onClick={""} />
          <IconButton icon={<FaGithub />} isRound="true" onClick={""} />
          <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} />
        </Flex>
      </VStack>
      <Container>
        <Center>
          <Flex gap="10">
            <Text>
              <Link to="/">Home</Link>
            </Text>
            <Text>
              <Link to="/about">About</Link>
            </Text>
            <Text>
              <Link to="/works">Works</Link>
            </Text>
            <Text>
              <Link to="/projects">Projects</Link>
            </Text>
          </Flex>
        </Center>
      </Container>
    </>
  )
}

