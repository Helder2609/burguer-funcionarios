'use client';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { IoLogoTwitter } from 'react-icons/io';

export default function Cardapio() {
  return (
    <>
      {/* Cabeçalho */}
      <header id="cabecalho" className="text-center my-3">
        <Link href="/home" passHref>
          <img src="/imagens/rbg.png" alt="Logo The Burguer" width={350} height={350} />
        </Link>
      </header>

      {/* Menu */}
      <div className="menu-container">
        <Link href="/cardapio" className="menu-item">
          <img src="/imagens/hamburguer (1).png" alt="Burgers Icon" className="menu-icon" />
          <span className="menu-text">BURGERS</span>
        </Link>
        <Link href="/bebidas" className="menu-item">
          <img src="/imagens/cerveja.png" alt="Bebidas Icon" className="menu-icon" />
          <span className="menu-text">BEBIDAS</span>
        </Link>
        <Link href="/sobremesas" className="menu-item">
          <img src="/imagens/sobremesa.png" alt="Sobremesas Icon" className="menu-icon" />
          <span className="menu-text">SOBREMESAS</span>
        </Link>
        <Link href="/porcoes" className="menu-item">
          <img src="/imagens/batatas-fritas.png" alt="Porções Icon" className="menu-icon" />
          <span className="menu-text">PORÇÕES</span>
        </Link>
      </div>

      {/* Cards de Produtos */}
      <Container className="my-5">
        <Row>
          <Col md={3}>
            <Card>
              <Link href="/brieburguer">
                <Card.Img variant="top" src="http://www.lepingue.com.br/admin/uploads/images/galeria/agua-com-e-sem-gas_19b3d1073e4ebc83e6392331f4d11565__800x600__0x0.jpg" alt="Brie Burguer" />
              </Link>
              <Card.Body>
                <Card.Title>Água com e sem gás</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Link href="/carnequeijo">
                <Card.Img variant="top" src="http://www.lepingue.com.br/admin/uploads/images/galeria/chopp-amstel-ou-heineken_820510a3a83ec78bbd0e54e0d9dd817c__800x600__0x0.jpg" alt="Carne e Queijo" />
              </Link>
              <Card.Body>
                <Card.Title>Chopp</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Link href="/carnequeijo">
                <Card.Img variant="top" src="http://www.lepingue.com.br/admin/uploads/images/galeria/refrigerantes_99df518e5874b138c89fb300feeb24f4__800x600__0x0.jpg" alt="Carne e Queijo" />
              </Link>
              <Card.Body>
                <Card.Title>Refrigerantes</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Link href="/carnequeijo">
                <Card.Img variant="top" src="https://cdn.abrahao.com.br/base/679/9cd/bc9/suco-natural-laranja.jpg" alt="Carne e Queijo" />
              </Link>
              <Card.Body>
                <Card.Title>Sucos Naturais Diversos</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Link href="/carnequeijo">
                <Card.Img variant="top" src="http://www.lepingue.com.br/admin/uploads/images/galeria/heineken-e-sol-long-neck_3ab2618f60115038c3a86b179fa77cc3__800x600__0x0.jpg" alt="Carne e Queijo" />
              </Link>
              <Card.Body>
                <Card.Title>Heineken e Sol Long Neck</Card.Title>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

 
      {/* Rodapé */}
      <div className="container my-5">
        <footer className="text-center text-lg-start" style={{ backgroundColor: '#000' }}>
          <div className="container d-flex justify-content-center py-5">
            <Button className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#E5A220' }}>
              <FaFacebook />
            </Button>
            <Button className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#E5A220' }}>
              <FiInstagram />
            </Button>
            <Button className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#E5A220' }}>
              <AiOutlineWhatsApp />
            </Button>
            <Button className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#E5A220' }}>
              <IoLogoTwitter />
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center text-white p-3" style={{ backgroundColor: '#000' }}>
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </footer>
      </div>
    </>
  );
}
