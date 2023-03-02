import { 
    Box, 
    Container, 
    Text, 
    Image, 
    Button, 
    Center 
} from "@chakra-ui/react";

export default function Home() {

  return (
    <>
        <Container mt={12}>
            <Center>
                <Text fontWeight="semibold" fontSize={40}><Text as="span" color="teal.400" fontSize={40} fontWeight="bold">Hello!</Text> I'm Ralph Cadeliña</Text>      
            </Center>
                
            <Text align="center" pt="5" pb="5">
                A Frontend focused <Text as="span" color="teal.400" fontWeight="bold">Web Developer</Text> building the Frontend of Websites and Web Applications that leads to the success of the overall product.
            </Text>
                          
        </Container>
        <Container align="center" mt={5}>
           <Button bg="teal.600" onClick={() => window.location = 'mailto:email@email.com'}>Let's Talk!</Button>
        </Container>
        <Container>
            <Box align="center" mt={10}>
                <Image
                    h={300}
                    w={400}
                    src='/static/images/profpic.png'
                    alt='image here'
                />
            </Box>
        </Container>
   
    </>
  )
}
