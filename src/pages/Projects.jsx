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


export default function Projects() {
  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" fontSize={{base:"35px", md:"50px", lg:"65px"}} mt="20" fontWeight="bold">Projects</Heading>
      </Container>
      
      <Box bg="gray.200" h="100%" mt={-3}>
        <SimpleGrid columns={{ base:"1", md:"1", lg:"2"}} p="10" spacing="10">
          <Box>
              <Card maxW='container.xl'>
                <CardBody>
                  <a href="#">
                    <Image
                      src='/static/images/mkdph-front.png'
                      alt='MKDPH image'
                      borderRadius='lg'
                    />
                  </a>
                  <Stack mt='6' spacing='3'>
                  <Heading size='md'>Mindanao Kokusai Daigaku <Text as="span">(Capstone Project)</Text></Heading>
                  <Text>A final project required for the web development bootcamp. The project has a dashboard panel for the admin, teachers and students for view and grade inputs.</Text>
                  <Text fontSize='2xl'>
                    <Text color="blue.400">Technology used : </Text>
                    <List>
                      <ListItem fontSize="md">
                        <IconButton bg="none" mr={3} icon={<FaHtml5 />}/>
                        HTML
                      </ListItem>
                      <ListItem fontSize="md">
                        <IconButton bg="none" mr={3} icon={<FaCss3 />}/>
                        CSS
                      </ListItem>
                      <ListItem fontSize="md">
                        <IconButton bg="none" mr={3} icon={<FaBootstrap />}/>
                        Bootstrap
                      </ListItem>
                      <ListItem fontSize="md">
                        <IconButton bg="none" mr={3} icon={<FaPhp />}/>
                        PHP
                      </ListItem>
                      <ListItem fontSize="md">
                        <IconButton bg="none" mr={3} icon={<FaLaravel />} />
                        Laravel
                      </ListItem>
                    </List>
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Text>Github repo :</Text>
                <Text ml={5} as="u"><a href="https://github.com/tsujintsujin/KokusaiDaigaku" target="_blank">https://github.com/tsujintsujin/KokusaiDaigaku</a></Text>                
              </CardFooter>
              <CardFooter mt={-7}>
                <Text>Live link :</Text>
                <Text ml={12} as="u"><a href="https://kokusai-demo-5v7e.vercel.app/index.html" target="_blank">https://kokusai-demo-5v7e.vercel.app/index.html</a></Text>
              </CardFooter>
              </Card>
          </Box>

          <Box>
            <Card maxW='container.xl'>
              <CardBody>
                <a href="https://kodego-attendance.vercel.app/" target="_blank">
                  <Image
                    src='/static/images/kodegomonitoringsystem-mp2.png'
                    alt='KodeGo Monitoring System image'
                    borderRadius='lg'
                  />
                </a>
                <Stack mt='6' spacing='3'>
                <Heading size='md'>KodeGo Monitoring System <Text as="span">(Major Project 2)</Text></Heading>
                  <Text>An API Web Driven application. A monitoring system for the students of KodeGo.</Text>
                  <Text fontSize='2xl'>
                    <Text color="blue.400">Technology used : </Text>
                    <List>
                      <ListItem fontSize="md">
                        <IconButton bg="none" mr={3} icon={<FaHtml5 />}/>
                        HTML
                      </ListItem>
                      <ListItem fontSize="md">
                        <IconButton bg="none" mr={3} icon={<FaCss3 />}/>
                        CSS
                      </ListItem>
                      <ListItem fontSize="md">
                        <IconButton bg="none" mr={3} icon={<FaReact />}/>
                        ReactJS
                      </ListItem>
                      <ListItem fontSize="md">
                        <IconButton bg="none" mr={3}/>
                        Material UI
                      </ListItem>
                      <ListItem fontSize="md">
                        <IconButton bg="none" mr={3} />
                        Firebase
                      </ListItem>
                    </List>
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Text>Github repo :</Text>
                <Text ml={5} as="u"><a href="https://github.com/5dam/kodego-attendance" target="_blank">https://github.com/5dam/kodego-attendance</a></Text>                
              </CardFooter>
              <CardFooter mt={-7}>
                <Text>Live link :</Text>
                <Text ml={12} as="u"><a href="https://kodego-attendance.vercel.app/" target="_blank">https://kodego-attendance.vercel.app/</a></Text>
              </CardFooter>
            </Card>
          </Box>

          <Box>
            <Card maxW='container.xl'>
              <CardBody>
                <a href="https://majorproject1-moveme.vercel.app/">
                  <Image
                    src='/static/images/moveme-mp1.png'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                </a>
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Move Me <Text as="span">(Major Project 1)</Text></Heading>
                  <Text>A static only webpages required. No functionalities are available on this project.</Text>
                  <Text fontSize='2xl'>
                    <Text color="blue.400">Technology used : </Text>
                    <List>
                      <ListItem fontSize="md">
                        <IconButton bg="none" mr={3} icon={<FaHtml5 />}/>
                        HTML
                      </ListItem>
                      <ListItem fontSize="md">
                        <IconButton bg="none" mr={3} icon={<FaCss3 />}/>
                        CSS
                      </ListItem>
                      <ListItem fontSize="md">
                        <IconButton bg="none" mr={3} icon={<FaBootstrap />}/>
                        Bootstrap
                      </ListItem>
                    </List>
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Text>Github repo :</Text>
                <Text ml={5} as="u"><a href="https://github.com/5dam/majorproject1-moveme" target="_blank">https://github.com/5dam/majorproject1-moveme</a></Text>                
              </CardFooter>
              <CardFooter mt={-7}>
                <Text>Live link :</Text>
                <Text ml={12} as="u"><a href="https://majorproject1-moveme.vercel.app/" target="_blank">https://majorproject1-moveme.vercel.app/</a></Text>
              </CardFooter>
            </Card>
          </Box>

        </SimpleGrid> 
      </Box>
    </>
  )
}
