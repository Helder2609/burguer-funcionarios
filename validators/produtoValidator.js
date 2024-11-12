// produtoValidator.js

import * as Yup from 'yup';

export const produtoValidator = Yup.object({
    nome: Yup.string()
        .required("O nome do produto é obrigatório."),
    categoria: Yup.string()
        .required("A categoria é obrigatória."),
    preco: Yup.number()
        .required("O preço é obrigatório.")
        .positive("O preço deve ser um valor positivo.")
        .typeError("O preço deve ser um número."),
    descricao: Yup.string()
        .required("A descrição é obrigatória."),
    imagem: Yup.string()
        .url("A imagem deve ser uma URL válida.")
        .required("A URL da imagem é obrigatória."),
});
