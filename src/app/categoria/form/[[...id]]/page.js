'use client'

import Pagina from "@/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import categoriaValidator from "../../../../../validators/categoriaValidator";

export default function Page() {
    const route = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams ? searchParams.get("id") : null;

    const [categoria, setCategoria] = useState({ nome: '' });

    useEffect(() => {
        if (id) {
            const categorias = JSON.parse(localStorage.getItem('categorias')) || [];
            const dados = categorias.find(item => item.id == id);
            setCategoria(dados || { nome: '' });
        }
    }, [id]);

    function salvar(dados) {
        const categorias = JSON.parse(localStorage.getItem('categorias')) || [];

        if (id) {
            const index = categorias.findIndex(item => item.id === id);
            categorias[index] = { ...categorias[index], ...dados };
        } else {
            dados.id = uuidv4();
            categorias.push(dados);
        }

        localStorage.setItem('categorias', JSON.stringify(categorias));
        route.push('/cadastroCategorias');
    }

    return (
        <Pagina titulo="Categoria">
            <Formik
                initialValues={categoria}
                onSubmit={values => salvar(values)}
                validationSchema={categoriaValidator} // Aplicando o validator
                enableReinitialize
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                value={values.nome}
                                onChange={handleChange}
                                isInvalid={touched.nome && errors.nome}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.nome}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="text-center">
                            <Button type="submit" variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link href="/cadastroCategorias" className="btn btn-danger ms-2">
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    )
}
