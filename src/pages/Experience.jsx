import { Box, Text, Stack, Card, CardBody, CardHeader, Container, Heading, Spacer } from '@chakra-ui/react'

export default function Experience() {

  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" size="3xl" mt="20" fontWeight="bold" fontSize={{base:"30px", md:"45px", lg:"65px"}}>Experience</Heading>
      </Container>
      <Box bg="gray.200" h="100vh" mt={{ base:"-1", md:"-2"}}>
        <Container maxW="container.sm">
          <Box pt={20}>
              <Heading as="em" color="black">2023</Heading>
          </Box>

          <Card>
            <CardHeader>
              <Stack>
                <Heading as="h3" size="lg">KodeGo</Heading>
                <Text>Fullstack Developer (Intern)</Text>
              </Stack>
            </CardHeader>
            <CardBody>
              <Stack>
                <Box>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quo.</Text>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ex?</Text>
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
                <Text>Junior Frontend Developer</Text>
              </Stack>
            </CardHeader>
            <CardBody>
              <Stack>
                <Box>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, porro!</Text>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, ipsum.</Text>
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
              </Stack>
            </CardHeader>
            <CardBody>
              <Stack>
                <Box>
                  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dicta?</Text>
                  <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, mollitia.</Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

        </Container>
      </Box>
    </>
  )
}
