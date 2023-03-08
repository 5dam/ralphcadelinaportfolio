import { 
    Box, 
    Container, 
    Text, 
    Image, 
    Button, 
    Center,
} from "@chakra-ui/react";

export default function Home() {

  return (
    <>
    <Container h="82vh">
        <Container mt={12}>
        <Container>
            <Box align="center" mt={10}>
                <Image
                    src='/static/images/testprofilepic.png'
                    alt='image here'
                />
            </Box>
        </Container>
            <Center>
                <Text fontWeight="semibold" fontSize={40}><Text as="span" color="teal.400" fontSize={40} fontWeight="bold">Hello!</Text> I'm Ralph Cadeliña</Text>      
            </Center>
                
            <Text align="center" pt="5" pb="5">
                A Frontend focused <Text as="span" color="teal.400" fontWeight="bold">Web Developer</Text> building the Frontend of Websites and Web Applications that leads to the success of the overall product.
            </Text>
                          
        </Container>
        <Container align="center" mt={5}>
           
                <div className="talk">
                    <Button className="talk" onClick={() => window.location = 'mailto:ralphcadelina5@gmail.com'}>Let's Talk!</Button>
                </div>
           
        </Container>
    </Container>
   
    </>
  )
}
