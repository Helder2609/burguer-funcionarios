'use client';

import Pagina from "@/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { mask, unmask } from "remask";
import { v4 } from "uuid";

export default function Page({ params }) {
    const route = useRouter();
    const [funcionarios, setFuncionarios] = useState([]);
    const [funcionario, setFuncionario] = useState({ nome: '', cargo: '', dataAdmissao: '', pisoSalarial: '' });

    useEffect(() => {
        const storedFuncionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
        setFuncionarios(storedFuncionarios);

        const dados = storedFuncionarios.find(item => item.id == params.id);
        setFuncionario(dados || { nome: '', cargo: '', dataAdmissao: '', pisoSalarial: '' });
    }, [params.id]);

    function salvar(dados) {
        if (funcionario.id) {
            Object.assign(funcionario, dados);
        } else {
            dados.id = v4();
            funcionarios.push(dados);
        }

        localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
        return route.push('/cadastroFuncionarios');
    }

    return (
        <Pagina titulo="Funcionário">
            <Formik
                initialValues={funcionario}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                value={values.nome}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="cargo">
                            <Form.Label>Cargo</Form.Label>
                            <Form.Select
                                name="cargo"
                                value={values.cargo}
                                onChange={handleChange}
                            >
                                <option value=''>Selecione</option>
                                <option value='Cozinheiro'>Cozinheiro</option>
                                <option value='Garçom'>Garçom</option>
                                <option value='Garçonete'>Garçonete</option>
                                <option value='Cumin'>Cumin</option>
                                <option value='Caixa'>Caixa</option>
                                <option value='Serviços Gerais'>Serviços Gerais</option>
                                <option value='Entregador'>Entregador</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="dataAdmissao">
                            <Form.Label>Data de Admissão</Form.Label>
                            <Form.Control
                                type="date"
                                name="dataAdmissao"
                                value={values.dataAdmissao}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="pisoSalarial">
                            <Form.Label>Piso Salarial</Form.Label>
                            <Form.Control
                                type="text"
                                name="pisoSalarial"
                                value={values.pisoSalarial}
                                onChange={handleChange}
                                placeholder="R$ 0,00"
                                onBlur={e => {
                                    const valor = unmask(e.target.value);
                                    setFieldValue('pisoSalarial', mask(valor, 'R$ 999,99'));
                                }}
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button type="submit" variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/cadastroFuncionarios"
                                className="btn btn-danger ms-2"
                            >
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    );
}
