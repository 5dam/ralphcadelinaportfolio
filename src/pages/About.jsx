import { Box, Container, Heading } from '@chakra-ui/react'



export default function About() {
  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" size="4xl" mt="20" fontWeight="bold">About</Heading>
      </Container>
      
      <Box bg="gray.200" h="100vh" mt={-2.5}>

      </Box>
  </>
  )
}
