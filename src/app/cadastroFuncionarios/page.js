'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaPlusCircle, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Funcionarios() {
    const [funcionarios, setFuncionarios] = useState([]);

    // Carrega os funcionários do localStorage
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('funcionarios')) || [];
        setFuncionarios(data);
    }, []);

    // Função para excluir um funcionário
    function excluir(id) {
        if (confirm('Deseja realmente excluir este funcionário?')) {
            const atualizados = funcionarios.filter(item => item.id !== id);
            localStorage.setItem('funcionarios', JSON.stringify(atualizados));
            setFuncionarios(atualizados);
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
                    <h1 className="mb-4">Cadastro de Funcionários</h1>
                </header>
                <Link href="/cadastroFuncionarios/form" className="btn btn-primary mb-3">
                    <FaPlusCircle /> Novo Funcionário
                </Link>

                <Table striped bordered hover variant="light" className="custom-table">
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Data de Admissão</th>
                        </tr>
                    </thead>
                    <tbody>
                        {funcionarios.length > 0 ? (
                            funcionarios.map((item) => (
                                <tr key={item.id}>
                                    <td className="actions">
                                        <Link href={`/cadastroFuncionarios/form?id=${item.id}`} passHref>
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
                                    <td>{item.cargo}</td>
                                    <td>{item.dataAdmissao}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    Nenhum funcionário cadastrado.
                                </td>
                            </tr>
                        )}
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
