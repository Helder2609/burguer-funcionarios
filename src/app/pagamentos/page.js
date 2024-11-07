'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaPlusCircle, FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

export default function FormasPagamento() {
    const [formasPagamento, setFormasPagamento] = useState([]);

    // Carregar as formas de pagamento do localStorage
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('formasPagamento')) || [];
        setFormasPagamento(data);
    }, []);

    // Função para excluir uma forma de pagamento
    function excluir(id) {
        if (confirm('Deseja realmente excluir esta forma de pagamento?')) {
            const atualizados = formasPagamento.filter(item => item.id !== id);
            localStorage.setItem('formasPagamento', JSON.stringify(atualizados));
            setFormasPagamento(atualizados);
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
                    <h1 className="mb-4">Formas de Pagamento</h1>
                </header>
                <Link href="/pagamentos/form" className="btn btn-primary mb-3">
                    <FaPlusCircle /> Nova Forma de Pagamento
                </Link>

                <Table striped bordered hover variant="light" className="custom-table">
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>Forma de Pagamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formasPagamento.map((item) => (
                            <tr key={item.id}>
                                <td className="actions">
                                    <Link href={`/pagamentos/form/${item.id}`}>
                                        <FaRegEdit 
                                            title="Editar" 
                                            className="text-primary me-2 hover-icon" 
                                        />
                                    </Link>
                                    <MdDelete
                                        title="Excluir"
                                        className="text-danger hover-icon"
                                        onClick={() => excluir(item.id)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </td>
                                <td>{item.nome}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            <style jsx>{`
                .custom-table {
                    background-color: white;
                }

                .actions {
                    text-align: center;
                }

                .hover-icon {
                    cursor: pointer;
                    transition: transform 0.2s;
                }

                .hover-icon:hover {
                    transform: scale(1.2);
                }
            `}</style>
        </>
    );
}
