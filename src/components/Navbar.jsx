import { 
  Center, 
  Container, 
  Flex, 
  Text, 
  IconButton, 
  Spacer, 
  useColorMode, 
  VStack, 
  Button, 
  Tooltip 
} from '@chakra-ui/react'
import { 
  FaSun, 
  FaMoon, 
  FaGithub, 
  FaLinkedin, 
  FaFacebook 
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


export default function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode ==='dark'

  let activeStyle = {
    fontWeight: 'bold',
    color: 'teal',
  }

  return (
    <>
      <VStack p={5}>
        <Flex w="100%" gap="3">
        <a href="/documents/RalphCadelina.pdf" download="Ralph Cadelina's Resume" target="_blank"><Button size="sm">Resume</Button></a>
          <Spacer />
          <Tooltip label="Linkedin" fontSize="md">
            <a href="https://www.linkedin.com/in/ralphcadelina/" target="_blank"><IconButton size="sm" colorScheme='linkedin' icon={<FaLinkedin />} isRound="true" /></a>
          </Tooltip>
          <Tooltip label="Facebook" fontSize="md"><a href="https://www.facebook.com/1234567890stragedy" target="_blank"><IconButton size="sm" colorScheme='messenger' icon={<FaFacebook />} isRound="true" /></a></Tooltip>
          <Tooltip label="Github" fontSize="md"><a href="https://github.com/5dam" target="_blank"><IconButton size="sm" colorScheme='green' icon={<FaGithub />} isRound="true" /></a></Tooltip>
          <IconButton size="sm" ml={8} icon={isDark ? <FaSun color="yellow" /> : <FaMoon />} isRound="true" onClick={toggleColorMode} />
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
            <NavLink to="/experience" style={({ isActive }) => isActive ? activeStyle : undefined}>Experience</NavLink>
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

