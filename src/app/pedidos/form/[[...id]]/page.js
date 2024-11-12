'use client';

import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";
import { pedidoValidator } from "../../../../../validators/pedidoValidator";

export default function Page({ params }) {
  const route = useRouter();
  const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
  const dados = pedidos.find((item) => item.id === params.id);
  const pedido = dados || { cliente: "", produtos: "", total: "" }; // Iniciando 'produtos' como uma string vazia

  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    setProdutos(JSON.parse(localStorage.getItem("produtos")) || []);
  }, []);

  function salvar(dados) {
    if (pedido.id) {
      Object.assign(pedido, dados);
    } else {
      dados.id = v4();
      pedidos.push(dados);
    }

    localStorage.setItem("pedidos", JSON.stringify(pedidos));
    return route.push("/pedidos");
  }

  return (
    <>
      <header id="cabecalho" className="text-center my-3">
        <Link href="/home" passHref>
          <img
            src="/imagens/rbg.png"
            alt="Logo The Burguer"
            width={350}
            height={350}
          />
        </Link>
      </header>

      <div className="form-container">
        <h1>{pedido.id ? "Editar Pedido" : "Adicionar Pedido"}</h1>
        <Formik
          initialValues={pedido}
          validationSchema={pedidoValidator}
          onSubmit={(values) => salvar(values)}
        >
          {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="cliente">
                <Form.Label>Cliente:</Form.Label>
                <Form.Control
                  type="text"
                  name="cliente"
                  value={values.cliente}
                  onChange={(e) => setFieldValue("cliente", e.target.value)}
                  isInvalid={touched.cliente && errors.cliente}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.cliente}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="produtos">
                <Form.Label>Produtos:</Form.Label>
                <Form.Select
                  name="produtos"
                  value={values.produtos}
                  onChange={(e) => setFieldValue("produtos", e.target.value)} // Garantindo que o valor seja uma string
                  isInvalid={touched.produtos && errors.produtos}
                >
                  <option value="">Selecione</option>
                  {produtos.map((item) => (
                    <option key={item.nome} value={item.nome}>
                      {item.nome}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.produtos}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="total">
                <Form.Label>Total:</Form.Label>
                <Form.Control
                  type="text"
                  name="total"
                  value={values.total}
                  onChange={(e) => setFieldValue("total", e.target.value)}
                  placeholder="Total em R$"
                  isInvalid={touched.total && errors.total}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.total}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="text-center">
                <Button type="submit" variant="success" className="w-100">
                  <FaCheck /> Salvar
                </Button>
              </div>

              <Link href="/pedidos" className="btn btn-danger w-100 mt-2">
                <MdOutlineArrowBack /> Voltar
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
