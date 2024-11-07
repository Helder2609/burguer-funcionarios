'use client'

import Pagina from "@/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { mask } from "remask";
import { v4 as uuidv4 } from "uuid";

export default function Page() {
    const route = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams ? searchParams.get("id") : null; // Verifique se searchParams existe antes de acessar "id"

    // Estado para os dados do funcionário
    const [funcionario, setFuncionario] = useState({ nome: '', cargo: '', dataAdmissao: '', pisoSalarial: '' });

    useEffect(() => {
        if (id) { // Só busca dados se o id estiver disponível
            const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
            const dados = funcionarios.find(item => item.id == id);
            setFuncionario(dados || { nome: '', cargo: '', dataAdmissao: '', pisoSalarial: '' });
        }
    }, [id]);

    function salvar(dados) {
        const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];

        if (funcionario.id) {
            Object.assign(funcionario, dados);
        } else {
            dados.id = uuidv4();
            funcionarios.push(dados);
        }

        localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
        route.push('/cadastroFuncionarios');
    }

    return (
        <Pagina titulo="Funcionário">
            <Formik
                initialValues={funcionario}
                onSubmit={values => salvar(values)}
                enableReinitialize
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
                                <option value=''>Selecione um cargo</option>
                                <option value='cozinheiro'>Cozinheiro</option>
                                <option value='garçom'>Garçom</option>
                                <option value='garçonete'>Garçonete</option>
                                <option value='cumin'>Cumin</option>
                                <option value='caixa'>Caixa</option>
                                <option value='serviços gerais'>Serviços Gerais</option>
                                <option value='entregador'>Entregador</option>
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
                                onChange={(e) => {
                                    setFieldValue('pisoSalarial', mask(e.target.value, ['R$ 9999,99']))
                                }}
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button type="submit" variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link href="/cadastroFuncionarios" className="btn btn-danger ms-2">
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    )
}
