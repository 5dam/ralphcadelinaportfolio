import { Box, Container, Heading, SimpleGrid, Flex, HStack, Grid, GridItem, Center } from '@chakra-ui/react'



export default function About() {
  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" fontSize={{base:"40px", md:"50px", lg:"65px"}} mt="20" fontWeight="bold">About</Heading>
      </Container>
      
      <Box bg="gray.200" h="100vh" mt={-3}>
       <Container color="gray.500" pt="50">
        <Center>
          <Heading as="h1" size="lg">Page Under Construction</Heading>
        </Center>
       </Container>

      </Box>
  </>
  )
}
