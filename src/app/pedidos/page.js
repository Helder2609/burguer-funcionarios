'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaPlusCircle, FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

export default function Pedidos() {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('pedidos')) || [];
        setPedidos(data);
    }, []);

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const atualizados = pedidos.filter(item => item.id !== id);
            localStorage.setItem('pedidos', JSON.stringify(atualizados));
            setPedidos(atualizados);
        }
    }

    return (
        <>
            <header id="cabecalho" className="text-center my-3">
                <Link href="/home" passHref>
                    <img src="/imagens/rbg.png" alt="Logo The Burguer" width={350} height={350} />
                </Link>
            </header>
            <div className="container">
                <header id="cabecalho">
                    <h1 className="mb-4">Pedidos</h1>
                </header>
                <Link href="/pedidos/form" className="btn btn-primary mb-3">
                    <FaPlusCircle /> Novo
                </Link>

                <Table className="custom-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Pedido ID</th>
                            <th>Cliente</th>
                            <th>Produtos</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidos.map((item) => (
                            <tr key={item.id}>
                                <td className="actions">
                                    <Link href={`/pedidos/form/${item.id}`}>
                                        <FaRegEdit title="Editar" className="text-primary me-2 hover-icon" />
                                    </Link>
                                    <MdDelete
                                        title="Excluir"
                                        className="text-danger hover-icon"
                                        onClick={() => excluir(item.id)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </td>
                                <td>{item.id}</td>
                                <td>{item.cliente}</td>
                                <td>{Array.isArray(item.produtos) ? item.produtos.join(', ') : item.produtos}</td>
                                <td>{item.total} R$</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}
