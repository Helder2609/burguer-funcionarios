'use client'

import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";
import { produtoValidator } from "../../../../../validators/produtoValidator";
import { mask } from "remask"; // Importando a função mask

export default function Page({ params }) {
    const route = useRouter();
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const dados = produtos.find(item => item.id === params.id);
    const produto = dados || { nome: '', categoria: '', preco: '', descricao: '', imagem: '' };

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        setCategorias(JSON.parse(localStorage.getItem('categorias')) || []);
    }, []);

    function salvar(dados) {
        if (produto.id) {
            const index = produtos.findIndex(item => item.id === produto.id);
            produtos[index] = dados;
        } else {
            dados.id = v4();
            produtos.push(dados);
        }

        localStorage.setItem('produtos', JSON.stringify(produtos));
        return route.push('/produtos');
    }

    const handleMaskedChange = (event, setFieldValue, maskPattern) => {
        const maskedValue = mask(event.target.value, maskPattern);
        setFieldValue(event.target.name, maskedValue);
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
            
            <div className="form-container">
                <h1>{produto.id ? 'Editar Produto' : 'Adicionar Produto'}</h1>
                <Formik
                    initialValues={produto}
                    onSubmit={values => salvar(values)}
                    validationSchema={produtoValidator}
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        setFieldValue,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    value={values.nome}
                                    onChange={handleChange}
                                    isInvalid={touched.nome && !!errors.nome}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.nome}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="categoria">
                                <Form.Label>Categoria:</Form.Label>
                                <Form.Select
                                    name="categoria"
                                    value={values.categoria}
                                    onChange={handleChange}
                                    isInvalid={touched.categoria && !!errors.categoria}
                                    required
                                >
                                    <option value=''>Selecione</option>
                                    {categorias.map(item => (
                                        <option key={item.id} value={item.nome}>
                                            {item.nome}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.categoria}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="preco">
                                <Form.Label>Preço:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="preco"
                                    value={values.preco}
                                    onChange={e => handleMaskedChange(e, setFieldValue, ['R$ 99,99', 'R$ 999,99'])}
                                    isInvalid={touched.preco && !!errors.preco}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.preco}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="descricao">
                                <Form.Label>Descrição:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="descricao"
                                    value={values.descricao}
                                    onChange={handleChange}
                                    isInvalid={touched.descricao && !!errors.descricao}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.descricao}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="imagem">
                                <Form.Label>Imagem:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="imagem"
                                    value={values.imagem}
                                    onChange={handleChange}
                                    isInvalid={touched.imagem && !!errors.imagem}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.imagem}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="text-center">
                                <Button type="submit" variant="success" className="w-100">
                                    <FaCheck /> Salvar
                                </Button>
                            </div>
                            <Link
                                href="/produtos"
                                className="btn btn-danger w-100 mt-2"
                            >
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}
