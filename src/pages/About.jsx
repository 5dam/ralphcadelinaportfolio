import { 
  Box, 
  Container, 
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Card,
  Text,
  Flex,
  Avatar,
  CardHeader,
  StatHelpText,
  Stat,
  Image,
  VStack,
  HStack,
  SimpleGrid,
  Divider
 } from '@chakra-ui/react'



export default function About() {
  return (
    <>
      <Container maxW="container.xl">
        <Heading as="h1" fontSize={{base:"40px", md:"50px", lg:"65px"}} mt="20" fontWeight="bold">About</Heading>
      </Container>
      
      <Box bg="gray.200" h="100%" mt={-3}>
      <Container maxW="container.lg" pt={10} pb={10}>
        <Card p={5} h="100%">
        <Tabs variant='enclosed'>
            <TabList>
              <Tab fontWeight="semibold">About me</Tab>
              <Tab fontWeight="semibold">Skills</Tab>
              <Tab fontWeight="semibold">Contact</Tab>
            </TabList>
            <TabPanels>
              {/* Panel 1 */}
              <TabPanel>
                <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar size="xl" name='Ralph Cadeliña' src='/static/images/profilepic.jpeg' />
                    <Box>
                      <Heading size='md'>Ralph Jason M. Cadeliña</Heading>
                      <Text as="i">Web Developer</Text>
                    </Box>
                  </Flex>
                </Flex>
                </CardHeader>
        
                <Heading size="md" mt={5} mb={2}>Career Objective :</Heading>
                <Text>
                  With a bachelor's degree holder in
                  Information Technology with
                  experience in the IT Industry particularly
                  in Web Development. I venture in
                  securing a position in a company where
                  I can apply my experience that would
                  best fit my qualifications. I aim to
                  further enhance my values toward any
                  responsibility that I will undertake.
                </Text>
                <Heading size="md" mt={5} mb={2}>Address :</Heading>
                <Text>
                  Peñaranda Street, Brgy. Taft, Surigao City, PH 8400
                </Text>
                <Heading size="md" mt={5} mb={2}>Education :</Heading>
                <Text>College Graduate</Text>
                <Text ml={5}>Surigao Education Center</Text>
                <Text ml={5}>Bachelor of Science in Information Technology</Text>
                <Stat>
                  <StatHelpText ml={5}>2012 - 2021</StatHelpText>
                </Stat>
                
              </TabPanel>

              {/* Panel 2 */}
              <TabPanel>
                <Heading mb={8} mt={10}>Technology Stack</Heading>
                <Container>
                  <SimpleGrid columns={4} spacing={5} minChildWidth="90px" align="center">
                      <Box>
                        <Image borderRadius="10px" w="100px" h="100px" src="/static/skills-stack/html.png"></Image>
                        <Text fontWeight="semibold">HTML</Text>
                      </Box>
                      <Box>
                        <Image borderRadius="10px" w="100px" h="100px" src="/static/skills-stack/css.png"></Image>
                        <Text fontWeight="semibold">CSS</Text>
                      </Box>
                      <Box>
                        <Image borderRadius="10px" w="100px" h="100px" src="/static/skills-stack/bootstrap.png"></Image>
                        <Text fontWeight="semibold">Bootstrap</Text>
                      </Box>
                      <Box>
                        <Image borderRadius="10px" w="100px" h="100px" src="/static/skills-stack/javascript.png"></Image>
                        <Text fontWeight="semibold">Javascript</Text>
                      </Box>
                      <Box>
                        <Image borderRadius="10px" w="100px" h="100px" src="/static/skills-stack/reactjs.svg"></Image>
                        <Text fontWeight="semibold">ReactJS</Text>
                      </Box>
                      <Box>
                        <Image borderRadius="10px" w="100px" h="100px" src="/static/skills-stack/mui.svg"></Image>
                        <Text fontWeight="semibold">Material UI</Text>
                      </Box>
                      <Box>
                        <Image borderRadius="10px" w="150px" h="100px" src="/static/skills-stack/chakraui.png"></Image>
                        <Text fontWeight="semibold">Chakra UI</Text>
                      </Box>
                      <Box>
                        <Image borderRadius="10px" w="100px" h="100px" src="/static/skills-stack/nodejs.png"></Image>
                        <Text fontWeight="semibold">NodeJS</Text>
                      </Box>
                      <Box>
                        <Image borderRadius="10px" w="100px" h="100px" src="/static/skills-stack/php.png"></Image>
                        <Text fontWeight="semibold">PHP</Text>
                      </Box>
                      <Box>
                        <Image borderRadius="10px" w="100px" h="100px" src="/static/skills-stack/laravel.svg"></Image>
                        <Text fontWeight="semibold">Laravel</Text>
                      </Box>
                      <Box>
                        <Image borderRadius="10px" w="100px" h="100px" src="/static/skills-stack/mysql.png"></Image>
                        <Text fontWeight="semibold">MySQL</Text>
                      </Box>
                      <Box>
                        <Image borderRadius="10px" w="100px" h="100px" src="/static/skills-stack/firebase.png"></Image>
                        <Text fontWeight="semibold">Firebase</Text>
                      </Box>
                      <Box>
                        <Image borderRadius="10px" w="100px" h="100px" src="/static/skills-stack/github.png"></Image>
                        <Text fontWeight="semibold">Github</Text>
                      </Box>
                  </SimpleGrid>                     
                </Container>
              </TabPanel>

              {/* Panel 3 */}
              <TabPanel>
                <Container>
                  <Heading mt={10}>Get in touch, let's talk.</Heading>
                  <Text mt={10} mb={5}>Feel free to send me an <Text as="u">email</Text> or schedule a free consultation with me.</Text>
                  <Divider />
                  <Box mb="220">
                    <Flex>
                      <Image src="/static/images/gmail.png" h="80px" w="80px"></Image>
                      <Text fontWeight="semibold" mt={6}>ralphcadelina5@gmail.com</Text>
                    </Flex>
                  
                    
                  </Box>
                </Container>
              </TabPanel>

            </TabPanels>
          </Tabs>
          </Card>
      </Container>
        
      </Box>
  </>
  )
}
