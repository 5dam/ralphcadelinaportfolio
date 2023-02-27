import { 
    Box, 
    Container, 
    Heading, 
    SimpleGrid, 
    Card, 
    CardBody, 
    Image, 
  } 
  from '@chakra-ui/react'
  
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
              <Card boxShadow="dark-lg" borderRadius="0">
                <div class="imgHover">
                  <CardBody>
                    <Image
                      p={5}
                      src="/static/images/mkdph-front.png"
                    ></Image>
                  </CardBody>
                </div>
              </Card>
            </a>
            <a href="https://kodego-attendance.vercel.app/" target="_blank">
              <Card boxShadow="dark-lg" borderRadius="0">
                <div class="imgHover">
                  <CardBody>
                    <Image
                      p={5}
                      src="/static/images/kodegomonitoringsystem-mp2.png"
                    ></Image>
                  </CardBody>
                </div>
              </Card>
            </a>
            <a href="https://majorproject1-moveme.vercel.app/" target="_blank">
              <Card boxShadow="dark-lg" borderRadius="0">
                <div class="imgHover">
                  <CardBody>
                    <Image
                      p={5}
                      src="/static/images/moveme-mp1.png"
                    >
                    </Image>
                  </CardBody>
                </div>
              </Card>
            </a>
          </SimpleGrid>
        </Container>
      </Box>
     </>
  )
}
