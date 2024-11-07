'use client';
import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { IoLogoTwitter } from 'react-icons/io';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import { Formik, Field, ErrorMessage, Form as FormikForm } from 'formik'; // Importações do Formik
import * as Yup from 'yup'; // Biblioteca de validação

// Esquema de validação com Yup
const validationSchema = Yup.object({
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  nome: Yup.string().required('Nome é obrigatório'),
  telefone: Yup.string().required('Telefone é obrigatório'),
  endereco: Yup.string().required('Endereço é obrigatório'),
  numero: Yup.number().required('Número é obrigatório').positive().integer(),
  senha: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
});

export default function Page() {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState('');

  // Função para salvar os dados no localStorage
  const salvar = (dados) => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    dados.id = uuidv4();
    usuarios.push(dados);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    setSuccessMessage('Usuário cadastrado com sucesso!');
  };

  return (
    <>
      <header id="cabecalho" className="text-center my-3">
        <Link href="/home" passHref>
          <img src="/imagens/rbg.png" alt="Logo The Burguer" width={350} height={350} />
        </Link>
      </header>

      <div className="menu-container">
        <Link href="/cardapio" className="menu-item">
          <img src="/imagens/hamburguer (1).png" alt="Burgers Icon" className="menu-icon" />
          <span className="menu-text">BURGERS</span>
        </Link>
        <Link href="/bebidas" className="menu-item">
          <img src="/imagens/cerveja.png" alt="Bebidas Icon" className="menu-icon" />
          <span className="menu-text">BEBIDAS</span>
        </Link>
      </div>

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="form-card">
              <Card.Body>
                <h2 className="form-title">Cadastro</h2>

                <Formik
                  initialValues={{
                    email: '',
                    nome: '',
                    telefone: '',
                    endereco: '',
                    complemento: '',
                    numero: '',
                    senha: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { resetForm }) => {
                    salvar(values);
                    resetForm(); // Limpa o formulário após o envio
                  }}
                >
                  {({ isSubmitting }) => (
                    <FormikForm>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>E-mail:</Form.Label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Digite seu e-mail"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formNome">
                        <Form.Label>Nome:</Form.Label>
                        <Field
                          type="text"
                          name="nome"
                          placeholder="Digite seu nome"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="nome"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formTelefone">
                        <Form.Label>Telefone:</Form.Label>
                        <Field
                          type="tel"
                          name="telefone"
                          placeholder="Digite seu telefone"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="telefone"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formEndereco">
                        <Form.Label>Endereço:</Form.Label>
                        <Field
                          type="text"
                          name="endereco"
                          placeholder="Digite seu endereço"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="endereco"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>

                      <Row>
                        <Col md={8}>
                          <Form.Group className="mb-3" controlId="formComplemento">
                            <Form.Label>Complemento:</Form.Label>
                            <Field
                              type="text"
                              name="complemento"
                              placeholder="Complemento"
                              className="form-control"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-3" controlId="formNumero">
                            <Form.Label>Número:</Form.Label>
                            <Field
                              type="number"
                              name="numero"
                              placeholder="Número"
                              className="form-control"
                            />
                            <ErrorMessage
                              name="numero"
                              component="div"
                              className="text-danger"
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3" controlId="formSenha">
                        <Form.Label>Senha:</Form.Label>
                        <Field
                          type="password"
                          name="senha"
                          placeholder="Digite sua senha"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="senha"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>

                      <Button
                        variant="dark"
                        type="submit"
                        className="form-button"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
                      </Button>
                    </FormikForm>
                  )}
                </Formik>

                {successMessage && (
                  <div className="mt-3 text-success">{successMessage}</div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="text-center my-5" style={{ backgroundColor: '#000' }}>
        <div className="container d-flex justify-content-center py-5">
          <Button className="btn btn-primary mx-2" style={{ backgroundColor: '#E5A220' }}>
            <FaFacebook />
          </Button>
          <Button className="btn btn-primary mx-2" style={{ backgroundColor: '#E5A220' }}>
            <FiInstagram />
          </Button>
          <Button className="btn btn-primary mx-2" style={{ backgroundColor: '#E5A220' }}>
            <AiOutlineWhatsApp />
          </Button>
          <Button className="btn btn-primary mx-2" style={{ backgroundColor: '#E5A220' }}>
            <IoLogoTwitter />
          </Button>
        </div>
        <div className="text-white p-3">© 2020 Copyright: MDBootstrap.com</div>
      </footer>
    </>
  );
}
