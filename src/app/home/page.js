'use client';
import { Container, Navbar, Nav, Carousel, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image'; // Para usar a logo como imagem
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaUserPlus, FaUserCheck, FaFacebook } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";

export default function Home() {
  return (
    <>
      {/* Cabeçalho */}
      <header id="cabecalho" className="text-center my-3">
        <Link href="/home" passHref>
          <img src="/imagens/rbg.png" alt="Logo The Burguer" width={350} height={350} />
        </Link>
      </header>

      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://churrasco.coz.br/wp-content/uploads/2023/08/Hamburguer1.jpg.webp"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/fotos-premium/batata-frita-com-bacon-e-cheddar_855892-890.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/fotos-premium/brownie-com-sorvete_729149-4465.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Botões de ação */}
      <Container className="text-center mt-5">
        <div className="d-flex justify-content-center mb-4">
          <Link href="/cardapio" passHref>
            <Button className="btn-light btn-lg btn-custom">
              <BiFoodMenu />
              {' '}Cardápio
            </Button>
          </Link>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <Link href="/cadastro" passHref>
            <Button className="btn-warning btn-lg btn-custom">
              <FaUserPlus />
              {' '}Cadastrar
            </Button>
          </Link>
        </div>
        <div className="d-flex justify-content-center">
          <Link href="/login" passHref>
            <Button className="btn-warning btn-lg btn-custom">
              <FaUserCheck />
              {' '}Login
            </Button>
          </Link>
        </div>
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
