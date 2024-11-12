'use client';

import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import avaliacoesValidator from "../../../../../validators/avaliacoesValidator";
import { mask } from "remask"; 

export default function Page() {
    const route = useRouter();
    const { id } = useParams();
    const [avaliacao, setAvaliacao] = useState({ id: '', nome: '', comentario: '', nota: 0 });

    useEffect(() => {
        const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
        const dados = avaliacoes.find(item => item.id === id);

        if (dados) {
            setAvaliacao(dados);
        }
    }, [id]);

    function salvar(dados) {
        const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];

        if (avaliacao.id) {
            const index = avaliacoes.findIndex(item => item.id === avaliacao.id);
            avaliacoes[index] = { ...avaliacao, ...dados };
        } else {
            dados.id = uuidv4();
            avaliacoes.push(dados);
        }

        localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));
        route.push('/avaliacoes');
    }

    return (
        <>
            <header id="cabecalho" className="text-center my-3">
                <Link href="/home" passHref>
                    <img src="/imagens/rbg.png" alt="Logo The Burguer" width={350} height={350} />
                </Link>
            </header>

            <div className="form-container">
                <h1>{avaliacao.id ? 'Editar Avaliação' : 'Adicionar Avaliação'}</h1>
                <Formik
                    initialValues={{
                        nome: avaliacao.nome,
                        comentario: avaliacao.comentario,
                        nota: avaliacao.nota
                    }}
                    enableReinitialize={true}
                    validationSchema={avaliacoesValidator}
                    onSubmit={values => {
                        salvar(values);
                    }}
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                        errors,
                        touched,
                        setFieldValue
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Nome:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    value={values.nome}
                                    onChange={e => setFieldValue('nome', mask(e.target.value, ['AAAAAAAAAAAAAAAAAAAAAAAA']))}
                                    isInvalid={touched.nome && errors.nome}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.nome}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="nota">
                                <Form.Label>Nota:</Form.Label>
                                <div className="estrelas">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            className={`star ${values.nota >= star ? 'filled' : ''}`}
                                            onClick={() => setFieldValue('nota', star)}
                                            role="button"
                                            tabIndex={0}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="comentario">
                                <Form.Label>Comentário:</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="comentario"
                                    value={values.comentario}
                                    onChange={handleChange}
                                    isInvalid={touched.comentario && errors.comentario}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.comentario}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="text-center">
                                <Button type="submit" variant="success" className="w-100 btn-save">
                                    <FaCheck /> Salvar
                                </Button>
                            </div>
                            <Link
                                href="/avaliacoes"
                                className="btn btn-danger w-100 mt-2"
                            >
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </Form>
                    )}
                </Formik>
            </div>

            <style jsx>{`
                .estrelas {
                    display: flex;
                    justify-content: center;
                    margin: 0.5rem 0;
                }

                .star {
                    font-size: 2rem;
                    color: gray;
                    cursor: pointer;
                    transition: color 0.2s;
                }

                .star.filled {
                    color: gold;
                }

                .star:hover {
                    color: orange;
                }

                .btn-save {
                    color: black;
                }
            `}</style>
        </>
    );
}
