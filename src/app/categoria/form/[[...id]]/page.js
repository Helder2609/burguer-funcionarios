'use client'

import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";

export default function Page({ params }) {
    const route = useRouter();
    const categorias = JSON.parse(localStorage.getItem('categorias')) || [];
    const dados = categorias.find(item => item.id === params.id); // Comparação estrita
    const categoria = dados || { nome: ''};

    function salvar(dados) {
        if (categoria.id) {
            Object.assign(categoria, dados);
        } else {
            dados.id = v4();
            categorias.push(dados);
        }

        localStorage.setItem('categorias', JSON.stringify(categorias)); // Corrigido para 'categorias'
        return route.push('/categoria');
    }

    return (
        <>
            <header id="cabecalho" className="text-center my-3">
                <Link href="/home" passHref>
                    <img src="/imagens/rbg.png" alt="Logo The Burguer" width={350} height={350} />
                </Link>
            </header>

            <div className="form-container">
                <h1>{categoria.id ? 'Editar categoria' : 'Adicionar categoria'}</h1>
                <Formik
                    initialValues={categoria}
                    onSubmit={values => salvar(values)}
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    value={values.nome}
                                    onChange={handleChange('nome')}
                                    required
                                />
                            </Form.Group>

                            <div className="text-center">
                                <Button type="submit" variant="success" className="w-100">
                                    <FaCheck /> Salvar
                                </Button>
                            </div>
                            <Link
                                href="/categoria"
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
