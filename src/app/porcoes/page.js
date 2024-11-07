'use client';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaFacebook } from 'react-icons/fa';
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
                <Card.Img variant="top" src="https://cdn.prod.website-files.com/5edf7b44b7a4f6000913a233/64b1985e271c0bf2f3691586_Porcoes_.webp" alt="Brie Burguer" />
              </Link>
              <Card.Body>
                <Card.Title>Batata com Bacon</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Link href="/carnequeijo">
                <Card.Img variant="top" src="https://images.tcdn.com.br/img/img_prod/1210972/porcao_de_batata_rustica_7_1_4599418137c4db40c74265d515ed64b5.jpg" alt="Carne e Queijo" />
              </Link>
              <Card.Body>
                <Card.Title>Batata Rustica</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Link href="/carnequeijo">
                <Card.Img variant="top" src="https://swiftbr.vteximg.com.br/arquivos/ids/199593-450-450/618912-ANEL-DE-CEBOLA-SWIFT-11KG--1000-.jpg?v=638556299728130000" alt="Carne e Queijo" />
              </Link>
              <Card.Body>
                <Card.Title>Anéis de Cebola</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Link href="/carnequeijo">
                <Card.Img variant="top" src="https://swiftbr.vteximg.com.br/arquivos/ids/199651-450-450/617768-KIBE-SWIFT-500G.jpg?v=638557798718070000" alt="Carne e Queijo" />
              </Link>
              <Card.Body>
                <Card.Title>Kibe</Card.Title>
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
