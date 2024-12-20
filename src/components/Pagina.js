'use client'
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Pagina(props){
    return(
         <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Página Príncipal</Nav.Link>
            <Nav.Link href="/fundamentos">Fundamentos</Nav.Link>
            <Nav.Link href="/clientes">Clientes</Nav.Link>
            <Nav.Link href="/objetos">Objetos</Nav.Link>
            <Nav.Link href="/nomes">Nomes</Nav.Link>
            <Nav.Link href="/numeros">Numeros</Nav.Link>
            <Nav.Link href="/disney">Disney</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="bg-secondary text-white text-center p-3">
        <h1>{props.titulo}</h1>
      </div>
      <Container>
        {props.children}
      </Container>
    </>
    
    )
  }