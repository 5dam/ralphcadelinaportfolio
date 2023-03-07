import { Container, Image } from "@chakra-ui/react";


export default function Footer() {
  return (
    <Container maxW="container.xl">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="#"></a>
                <span className="mb-3 mb-md-0">All rights reserved 2023</span>
            </div>
            <div className="nav">
                <h1>Powered by</h1>
                <Image borderRadius="10px" w="30px" h="20px" src="/static/skills-stack/reactjs.svg" />
                <h1>+</h1>
                <Image borderRadius="10px" w="40px" h="22px" src="/static/skills-stack/chakraui.png" />            </div>
        </footer>
    </Container>
  )
}
