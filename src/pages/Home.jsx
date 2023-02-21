import { Box, Button, Center, Container, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";


export default function Home() {
  return (
    <>
    
        <SimpleGrid columns={2} spacing={5} mt={10} minChildWidth="430px">
            <Box bg='blue.500' height={{ base: '35vh', md: '55vh', lg: '70vh'}}>
                <Center h="30vh">
                    <Stack>
                        <Heading>Ralph Cadeliña</Heading>
                        <Text>Web Developer</Text>                    
                        <Button bg="blue.300">Hire me!</Button>
                    </Stack>                
                </Center>
            </Box>
            <Box bg='blue.500' height={{ base: '35vh', md: '55vh', lg: '70vh'}}>
                <Center h="30vh">
                    <Heading>Image</Heading>
                </Center>           
            </Box>
        </SimpleGrid>    
   
    </>
  )
}
