'use client';

import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid'; // Importando o uuid
import * as Yup from 'yup'; // Importando o Yup

// Definindo o validator para o formulário de pagamento
const formaPagamentoValidator = Yup.object({
    nome: Yup.string()
        .required('Campo obrigatório') // Definindo a mensagem de erro
});

export default function FormasPagamentoForm({ params }) {
    const route = useRouter();
    const [formasPagamento, setFormasPagamento] = useState([]);
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('formasPagamento')) || [];
        setFormasPagamento(data);
    }, []);

    const dados = formasPagamento.find(item => item.id === params.id);
    const formaPagamento = dados || { nome: '' };

    function salvar(dados) {
        if (formaPagamento.id) {
            // Atualiza forma de pagamento existente
            const index = formasPagamento.findIndex(item => item.id === formaPagamento.id);
            formasPagamento[index] = dados;
        } else {
            // Adiciona nova forma de pagamento
            dados.id = uuidv4(); // Gerando um ID único
            formasPagamento.push(dados);
        }

        localStorage.setItem('formasPagamento', JSON.stringify(formasPagamento));
        return route.push('/pagamentos'); // Redireciona para a listagem
    }

    return (
        <div>
            <header id="cabecalho" className="text-center my-3">
                <Link href="/home" passHref>
                    <img src="/imagens/rbg.png" alt="Logo The Burguer" width={350} height={350} />
                </Link>
            </header>

            <div className="form-container">
                <h1>{formaPagamento.id ? 'Editar Forma de Pagamento' : 'Adicionar Forma de Pagamento'}</h1>
                <Formik
                    initialValues={formaPagamento}
                    validationSchema={formaPagamentoValidator} // Aplicando o schema de validação
                    onSubmit={values => salvar(values)}
                >
                    {({ values, handleChange, handleSubmit, errors, touched }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Forma de Pagamento:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    value={values.nome}
                                    onChange={handleChange('nome')}
                                    isInvalid={touched.nome && errors.nome} // Verifica se o campo foi tocado e tem erro
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.nome} {/* Exibe a mensagem de erro */}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="text-center">
                                <Button type="submit" variant="success" className="w-100">
                                    <FaCheck /> Salvar
                                </Button>
                            </div>

                            <Link
                                href="/pagamentos"
                                className="btn btn-danger w-100 mt-2"
                            >
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
