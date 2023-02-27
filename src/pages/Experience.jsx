import { 
  Image, 
  CardFooter, 
  Box, 
  Text, 
  Stack, 
  Card, 
  CardBody, 
  Container, 
  Heading, 
  UnorderedList, 
  ListItem, 
  SimpleGrid, 
  Divider, 
  Stat, 
  StatHelpText, 
  StatLabel 
} from '@chakra-ui/react'

export default function Experience() {

  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" size="3xl" mt="20" fontWeight="bold" fontSize={{base:"30px", md:"45px", lg:"65px"}}>Experience</Heading>
      </Container>
      <Box bg="gray.200" h="100%" mt={{ base:"-1", md:"-2"}}>
        <Container maxW="container.lg">
          <SimpleGrid columns={2} minChildWidth="350px" spacing={10} pt={20} pb={20}>
            <Box boxShadow="dark-lg">
              <Card
                align="center"
                borderRadius="none"
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <div class="imgHover">
                  <a href="https://kodego.ph/" target="_blank">
                  <Image
                      p="3"
                      align="center"
                      boxSize={{ md:"310px", lg:"240px"}}
                      objectFit="contain"
                      maxW={{ base: '100%', sm: '200px' }}
                      src='/static/images/kodegologo1.svg'
                      alt='Caffe Latte'
                    />
                  </a>
                </div>
                <Stack>
                  <CardBody>
                    <Heading size='sm'>KodeGo</Heading>
                    <Text as="em" py='2' fontSize="sm">
                      Fullstack Developer Trainee
                    </Text>
                    <Divider />
                    <UnorderedList fontSize="xs" mt={3} mb={1}>
                      <ListItem>HTML, CSS, Bootstrap, Responsive Web Design.</ListItem>
                      <ListItem>Javascript, Nodejs, Web API's, Reactjs.</ListItem>
                      <ListItem>PHP, Laravel, Git & Github.</ListItem>
                      <ListItem>Firebase, mySQL.</ListItem>
                    </UnorderedList>
                  </CardBody>

                  <CardFooter>
                    <Stat>
                      <StatLabel>Duration</StatLabel>
                      <StatHelpText>Nov. 2022 - Feb. 2023</StatHelpText>
                    </Stat>
                  </CardFooter>
                </Stack>
              </Card>
            </Box>

            <Box boxShadow="dark-lg">
              <Card
                align="center"
                borderRadius="none"
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <div class="imgHover">
                  <a href="https://kre8tib.com/" target="_blank">
                  <Image
                      p="3"
                      align="center"
                      boxSize={{ md:"310px", lg:"240px"}}
                      objectFit="contain"
                      maxW={{ base: '100%', sm: '200px' }}
                      src='/static/images/kre8tiblogo.png'
                      alt='Caffe Latte'
                    />
                  </a>
                </div>
                <Stack>
                  <CardBody>
                    <Heading size='sm'>Kre8tib I.T. Services</Heading>

                    <Text as="em" py='2' fontSize="sm">
                      Jr. Frontend Developer
                    </Text>
                    <Divider />
                    <UnorderedList fontSize="xs" mt={3} mb={10}>
                      <ListItem>Part-time work</ListItem>
                      <ListItem>Build and implements static web pages and email templates</ListItem>
                    </UnorderedList>
                  </CardBody>

                  <CardFooter>
                    <Stat>
                      <StatLabel>Duration</StatLabel>
                      <StatHelpText>Aug. 2022 - Oct. 2022</StatHelpText>
                    </Stat>
                  </CardFooter>
                </Stack>
              </Card>
            </Box>

            <Box boxShadow="dark-lg">
              <Card
                borderRadius="none"
                align="center"
                p="3"
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <div class="imgHover">
                  <a href="https://sec.edu.ph/" target="_blank">
                  <Image
                      align="center"
                      boxSize={{ md:"310px", lg:"240px"}}
                      objectFit='contain'
                      maxW={{ base: '100%', sm: '200px' }}
                      src='/static/images/seclogo.png'
                      alt='Caffe Latte'
                    />
                  </a>
                </div>
                <Stack>
                  <CardBody>
                    <Heading size='sm' fontSize="sm">Surigao Education Center</Heading>

                    <Text as="em" py='2' fontSize="sm">
                      Site Admin
                    </Text>
                    <Divider />
                    <UnorderedList fontSize="xs" mt={3}>
                      <ListItem>Manage the official domain of the institution.</ListItem>
                      <ListItem>Build the website from template through wordpress.</ListItem>
                      <ListItem>Arrange the content and information of the institution.</ListItem>
                    </UnorderedList>
                  </CardBody>

                  <CardFooter>
                    <Stat>
                      <StatLabel>Duration</StatLabel>
                      <StatHelpText>Nov. 2021 - May 2022</StatHelpText>
                    </Stat>
                  </CardFooter>
                </Stack>
              </Card>
            </Box>
            

          </SimpleGrid>
        </Container>
      </Box>
      
    </>
  )
}
