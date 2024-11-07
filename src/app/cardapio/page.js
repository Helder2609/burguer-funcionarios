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
        <Link href="/" passHref>
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
                <Card.Img variant="top" src="http://www.lepingue.com.br/admin/uploads/images/galeria/brie-burguer_426df814c6236c8530e0d7a80adad2dc__800x600__0x0.jpg" alt="Brie Burguer" />
              </Link>
              <Card.Body>
                <Card.Title>Brie Burguer</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Link href="/carnequeijo">
                <Card.Img variant="top" src="http://www.lepingue.com.br/admin/uploads/images/galeria/carne-e-queijo_1af4893de4fcad581676267b5b91fa90__800x600__0x0.jpg" alt="Carne e Queijo" />
              </Link>
              <Card.Body>
                <Card.Title>Carne e Queijo</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Link href="/carnequeijo">
                <Card.Img variant="top" src="http://www.lepingue.com.br/admin/uploads/images/galeria/catupiry-com-bacon_94221992f9de5bfeb53cc0b2224a9bf8__800x600__0x0.jpg" alt="Carne e Queijo" />
              </Link>
              <Card.Body>
                <Card.Title>Catupiry com Bacon</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Link href="/carnequeijo">
                <Card.Img variant="top" src="http://www.lepingue.com.br/admin/uploads/images/galeria/costela_b8667c91dd1b9170e16063629ee41db7__800x600__0x0.jpg" alt="Carne e Queijo" />
              </Link>
              <Card.Body>
                <Card.Title>Costela</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Link href="/carnequeijo">
                <Card.Img variant="top" src="http://www.lepingue.com.br/admin/uploads/images/galeria/duplo-bacon_ca3908e0d94d46afac3781d82ce01f0a__800x600__0x0.jpg" alt="Carne e Queijo" />
              </Link>
              <Card.Body>
                <Card.Title>Duplo Bacon</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Link href="/carnequeijo">
                <Card.Img variant="top" src="http://www.lepingue.com.br/admin/uploads/images/galeria/quatro-queijos_d4f6e5d7a972a67e29a7c3b30b32ee8b__800x600__0x0.jpg" alt="Carne e Queijo" />
              </Link>
              <Card.Body>
                <Card.Title>Quatro Queijos</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Link href="/carnequeijo">
                <Card.Img variant="top" src="http://www.lepingue.com.br/admin/uploads/images/galeria/tuba_ab6a555193abd2ee1a36d41c985d2194__800x600__0x0.jpg"  alt="Carne e Queijo" />
              </Link>
              <Card.Body>
                <Card.Title>Tuba</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Link href="/carnequeijo">
                <Card.Img variant="top" src="http://www.lepingue.com.br/admin/uploads/images/galeria/pingue-chicken_c0d0ee1d61f04e052d52b234b924e89a__800x600__0x0.jpg" alt="Carne e Queijo" />
              </Link>
              <Card.Body>
                <Card.Title>The Chicken</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          {/* Adicione mais Cards conforme necessário */}
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
