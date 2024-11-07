'use client';

import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";

export default function Page({ params }) {
    const route = useRouter();
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    const dados = pedidos.find(item => item.id === params.id); // Comparação estrita
    const pedido = dados || { cliente: '', produtos: [], total: '' }; // Inicializando produtos como um array

    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        setProdutos(JSON.parse(localStorage.getItem('produtos')) || []);
    }, []);

    function salvar(dados) {
        if (pedido.id) {
            Object.assign(pedido, dados);
        } else {
            dados.id = v4();
            pedidos.push({
                ...dados,
                produtos: Array.isArray(dados.produtos) ? dados.produtos : [dados.produtos], // Garantindo que produtos seja um array
            });
        }

        localStorage.setItem('pedidos', JSON.stringify(pedidos));
        return route.push('/pedidos'); // Correção na rota
    }

    return (
        <>
            <header id="cabecalho" className="text-center my-3">
                <Link href="/home" passHref>
                    <img src="/imagens/rbg.png" alt="Logo The Burguer" width={350} height={350} />
                </Link>
                
            </header>

            <div className="form-container">
                <h1>{pedido.id ? 'Editar Pedido' : 'Adicionar Pedido'}</h1>
                <Formik
                    initialValues={pedido}
                    onSubmit={values => salvar(values)}
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="cliente">
                                <Form.Label>Cliente:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cliente"
                                    value={values.cliente}
                                    onChange={handleChange('cliente')}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="produtos">
                                <Form.Label>Produtos:</Form.Label>
                                <Form.Select
                                    name="produtos"
                                    onChange={e => {
                                        const selectedProduct = e.target.value;
                                        const updatedProducts = values.produtos ? [...values.produtos, selectedProduct] : [selectedProduct];
                                        handleChange('produtos')({ target: { value: updatedProducts } }); // Atualiza o estado com o novo array
                                    }}
                                >
                                    <option value=''>Selecione</option>
                                    {produtos.map(item => (
                                        <option key={item.nome} value={item.nome}>
                                            {item.nome}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="total">
                                <Form.Label>Total:</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="total"
                                    value={values.total}
                                    onChange={handleChange('total')}
                                    placeholder="Total em R$"
                                    required
                                />
                            </Form.Group>

                            <div className="text-center">
                                <Button type="submit" variant="success" className="w-100">
                                    <FaCheck /> Salvar
                                </Button>
                            </div>

                            <Link
                                href="/pedidos"
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
