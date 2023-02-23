import { Box, Container, Heading, SimpleGrid, Flex, HStack, Grid, GridItem } from '@chakra-ui/react'



export default function About() {
  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" fontSize={{base:"40px", md:"50px", lg:"65px"}} mt="20" fontWeight="bold">About</Heading>
      </Container>
      
      <Box bg="gray.200" h="100vh" mt={-3}>
        <Container maxW="container.xl" pt={10} color="black">
          <Heading>
            Hi! I'm a full-stack engineer specializing in developing solutions with JavaScript, Python, and PHP.
          </Heading>
        </Container>
        <Container maxW="container.xl">
          <Grid
          h='200px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
          >
            <GridItem rowSpan={2} colSpan={1} bg='tomato' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={4} bg='tomato' />
          </Grid>
          
        </Container>

      </Box>
  </>
  )
}
