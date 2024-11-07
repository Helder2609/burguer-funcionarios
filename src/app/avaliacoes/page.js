'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaPlusCircle, FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import StarRatings from 'react-star-ratings';

export default function Avaliacoes() {
    const [avaliacoes, setAvaliacoes] = useState([]);

    useEffect(() => {
        // Carregar as avaliações do localStorage ao montar o componente
        const data = JSON.parse(localStorage.getItem('avaliacoes')) || [];
        setAvaliacoes(data);
    }, []);

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const atualizados = avaliacoes.filter(item => item.id !== id);
            localStorage.setItem('avaliacoes', JSON.stringify(atualizados));
            setAvaliacoes(atualizados);
        }
    }

    return (
        <>
            <header id="cabecalho" className="text-center my-3">
                <Link href="/home" passHref>
                    <img src="/imagens/rbg.png" alt="Logo The Burger" width={350} height={350} />
                </Link>
            </header>
            <div className="container">
                <header id="cabecalho">
                    <h1 className="mb-4">Avaliações</h1>
                </header>
                <Link href="/avaliacoes/form" className="btn btn-primary mb-3">
                    <FaPlusCircle /> Novo
                </Link>

                <Table className="custom-table">
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>Cliente</th>
                            <th>Nota</th>
                            <th>Comentário</th>
                        </tr>
                    </thead>
                    <tbody>
                        {avaliacoes.map((item) => (
                            <tr key={item.id}>
                                <td className="actions">
                                    {/* Link para a rota dinâmica com o ID da avaliação */}
                                    <Link href={`/avaliacoes/form/${item.id}`} passHref>
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
                                <td>
                                    <StarRatings
                                        rating={item.nota || 0}
                                        starRatedColor="gold"
                                        numberOfStars={5}
                                        starDimension="30px"
                                        starSpacing="5px"
                                        name="nota"
                                    />
                                </td>
                                <td>{item.comentario}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}
