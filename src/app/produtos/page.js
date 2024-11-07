'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaPlusCircle, FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    // Carregar produtos do localStorage
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('produtos')) || [];
        setProdutos(data);
    }, []);

    // Função para excluir um produto
    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const atualizados = produtos.filter(item => item.id !== id);
            localStorage.setItem('produtos', JSON.stringify(atualizados));
            setProdutos(atualizados);
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
                    <h1 className="mb-4">Produtos</h1>
                </header>
                <Link href="/produtos/form" className="btn btn-primary mb-3">
                    <FaPlusCircle /> Novo
                </Link>

                <Table className="custom-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Imagem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((item) => (
                            <tr key={item.id}>
                                <td className="actions">
                                    <Link href={`/produtos/form/${item.id}`}>
                                        <FaRegEdit title="Editar" className="text-primary me-2 hover-icon" />
                                    </Link>
                                    <MdDelete
                                        title="Excluir"
                                        className="text-danger hover-icon"
                                        onClick={() => excluir(item.id)}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.categoria}</td>
                                <td>R$ {item.preco}</td>
                                <td>{item.descricao}</td>
                                <td className="image-cell">
                                    <img src={item.imagem} alt="Imagem do produto" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <style jsx>{`
                .image-cell {
                    text-align: center;
                    vertical-align: middle;
                    height: 250px;
                    width: 320px;
                    position: relative;
                }

                .image-cell img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            `}</style>
        </>
    );
}
