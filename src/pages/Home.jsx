import { Box, Center, Container, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
        <Container mt={12}>            
                <Stack>
                    <Text  fontSize={32} align="center" fontWeight="semibold">Ralph Jason Cadeliña</Text>
                    <Text  fontSize={20} align="center" fontWeight="semibold">Web Developer</Text>
                    
                    <Text pt={5} fontStyle="italic">“It is not the language that makes programs appear simple. It is the programmer that make the language appear simple!”</Text>
                    <blockquote align="right"> — Robert C. Martin</blockquote>
                </Stack>            
        </Container>
   
   
    </>
  )
}
