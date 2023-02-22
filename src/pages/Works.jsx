import { Box, Container, Heading } from '@chakra-ui/react'

export default function Works() {

  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" size="3xl" mt="20" fontWeight="bold" fontSize={{base:"30px", md:"50px", lg:"65px"}}>Work Experiences</Heading>
      </Container>
      <Box bg="gray.200" h="100vh" mt={{ base:"-1", md:"-2"}}>

      </Box>
    </>
  )
}
