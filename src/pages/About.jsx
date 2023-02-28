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
  Stat
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
                <Heading>Technology Stack</Heading>
              </TabPanel>

              {/* Panel 3 */}
              <TabPanel>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sed.</p>
              </TabPanel>

            </TabPanels>
          </Tabs>
          </Card>
      </Container>
        
      </Box>
  </>
  )
}
