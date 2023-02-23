import { Box, Text, Stack, Card, CardBody, CardHeader, Container, Heading, Spacer, UnorderedList, List, ListItem, OrderedList } from '@chakra-ui/react'

export default function Experience() {

  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" size="3xl" mt="20" fontWeight="bold" fontSize={{base:"30px", md:"45px", lg:"65px"}}>Experience</Heading>
      </Container>
      <Box bg="gray.200" h="100%" mt={{ base:"-1", md:"-2"}}>
      <Container maxW="container.sm" pb={10}>
          <Box pt={20}>
              <Heading as="em" color="black">2023</Heading>
          </Box>

          <Card>
            <CardHeader>
              <Stack>
                <Heading as="h3" size="lg">KodeGo</Heading>
                <Text>Fullstack Developer (Trainee)</Text>
                <Box>
                  <Text>Duration: Nov 2022- Feb 2023</Text>
                </Box>
              </Stack>
            </CardHeader>
            <CardBody>
              <Stack>
                <Box>
                  <UnorderedList>
                    <ListItem>
                      HTML and CSS Fundamentals,
                      Responsive Web Design,
                      Bootstrap CSS Framework,
                      Version Control with Git and Github.
                    </ListItem>
                    <ListItem>
                      Node.js Server Environment,
                      JavaScript,
                      Web APIs,
                      React.js Framework.
                    </ListItem>
                    <ListItem>
                      Structured Query Language,
                      PHP Object-oriented Programming,
                      MVC Software Architecture,
                      Laravel Framework,
                      API Testing and Documentation
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          
          <Box pt={5}>
              <Heading as="em" color="black">2022</Heading>
          </Box>

          <Card>
            <CardHeader>
              <Stack>
                <Heading as="h3" size="lg">Kre8tib I.T. Services</Heading>
                <Text>Junior Frontend Developer (Project-based)</Text>
                <Box>
                  <Text>Duration: Aug 2022 - Oct 2022</Text>
                </Box>
              </Stack>
            </CardHeader>
            <CardBody>
              <Stack>
                <Box>
                  <UnorderedList>
                    <ListItem>
                      Build and implements static web pages and email templates
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Box pt={5}>
              <Heading as="em" color="black">2021</Heading>
          </Box>

          <Card>
            <CardHeader>
              <Stack>
                <Heading as="h3" size="lg">Surigao Education Center</Heading>
                <Text>Junior Web Developer</Text>
                <Box>
                  <Text>Duration: Nov 2021- May 2022</Text>
                </Box>
              </Stack>
            </CardHeader>
            <CardBody>
              <Stack>
                <Box>
                    <UnorderedList>
                      <ListItem>
                       Build and maintain the official domain and subdomain of the institution.
                      </ListItem>
                      <ListItem>
                        Optimization and enhancement of website.
                      </ListItem>
                      <ListItem>
                        Coordinates with the senior developer for future plans of the website.
                      </ListItem>
                    </UnorderedList>
                  </Box>
              </Stack>
            </CardBody>
          </Card>
         
          

      </Container>
      </Box>
      
    </>
  )
}
