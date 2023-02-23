import { Box, Container, Heading } from '@chakra-ui/react'



export default function About() {
  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" fontSize={{base:"40px", md:"50px", lg:"65px"}} mt="20" fontWeight="bold">About</Heading>
      </Container>
      
      <Box bg="gray.200" h="100vh" mt={-3}>

      </Box>
  </>
  )
}
