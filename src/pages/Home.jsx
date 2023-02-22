import { Box, Container, Stack, Text, Image, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
        <Container mt={12}>            
                <Stack>
                    <Text  fontSize={40} align="center" fontWeight="semibold" color="teal.400">Ralph Jason Cadeliña</Text>
                    <Text  fontSize={24} align="center" fontWeight="semibold">Web Developer</Text>
                    
                    <Text pt={5} fontStyle="italic">“It is not the language that makes programs appear simple. It is the programmer that make the language appear simple!”</Text>
                    <blockquote align="right"> — Robert C. Martin</blockquote>
                </Stack>            
        </Container>
        <Container align="center" mt={5}>
            <Button bg="teal.600" color="white">Hire me!</Button>
        </Container>
        <Container>
            <Box align="center" mt={10}>
                <Image
                h={300}
                w={320}
                border='3px solid'
                borderRadius="50%"
                src='/static/images/profpic.png'
                alt='5dam'
                />
            </Box>
        </Container>
   
    </>
  )
}
