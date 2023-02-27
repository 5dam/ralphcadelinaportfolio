import { 
    Button, 
    ButtonGroup, 
    Box, 
    Container, 
    Heading, 
    SimpleGrid, 
    Card, 
    CardBody, 
    Image, 
    Stack, 
    Text, 
    Divider, 
    CardFooter, 
    ListItem,
    List,  
    IconButton,
    Center
  } 
  from '@chakra-ui/react'
import { FaBootstrap, FaCss3,  FaHtml5, FaLaravel, FaPhp, FaReact } from 'react-icons/fa'
import '/styles.css'

export default function Projects() {
  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" fontSize={{base:"35px", md:"50px", lg:"65px"}} mt="20" fontWeight="bold">Projects</Heading>
      </Container>
      <Box bg="gray.200" h="100%" mt={-3}>
        <Container maxW="container.lg">
          <SimpleGrid columns={2} color="black" minChildWidth="350px" spacing={10} pt={20} pb={20}>
            <a href="https://kokusai-demo-5v7e.vercel.app/index.html" target="_blank">
              <Box align="center" boxShadow="dark-lg" p="5">
                <div class="imgHover">
                  <Image src="/static/images/mkdph-front.png" h="230px" w="360px"></Image>
                </div>
              </Box>
            </a>
            <a href="https://kodego-attendance.vercel.app/" target="_blank">
              <Box boxShadow="dark-lg" align="center" p="5">
                <div class="imgHover">
                  <Image src="/static/images/kodegomonitoringsystem-mp2.png" h="230px" w="360px"></Image>
                </div>
              </Box>
            </a>
            <a href="https://majorproject1-moveme.vercel.app/" target="_blank">
            <Box boxShadow="dark-lg" align="center" p="5">
              <div class="imgHover">
                <Image src="/static/images/moveme-mp1.png" h="230px" w="360px"></Image>
              </div>
            </Box>
            </a>
          </SimpleGrid>

        </Container>
       
      </Box>



     </>
  )
}
