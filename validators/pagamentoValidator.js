import * as Yup from 'yup';

const formaPagamentoValidator = Yup.object({
    nome: Yup.string()
        .required('Campo obrigatório')
});
