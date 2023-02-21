import { Center, Container, Flex, Text, IconButton, Spacer, useColorMode, VStack, Button } from '@chakra-ui/react'
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


export default function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode ==='dark'

  let activeStyle = {
    border : "1px solid",
    padding : "10px",
    borderRadius : "20px"
  }

  return (
    <>
      
      <VStack p={5}>
        <Flex w="100%" gap="3">
      <Button>Resume</Button>
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
              <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>Home</NavLink>
            </Text>
            <Text>
            <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink>
            </Text>
            <Text>
            <NavLink to="/works" style={({ isActive }) => isActive ? activeStyle : undefined}>Works</NavLink>
            </Text>
            <Text>
            <NavLink to="/projects" style={({ isActive }) => isActive ? activeStyle : undefined}>Projects</NavLink>
            </Text>
          </Flex>
        </Center>
      </Container>
    </>
  )
}

