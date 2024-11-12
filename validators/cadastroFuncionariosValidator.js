import * as Yup from 'yup';

const cadastroFuncionariosValidator = Yup.object().shape({
    nome: Yup.string()
        .min(3, 'O mínimo de caracteres é 3')
        .max(100, 'O máximo de caracteres é 100')
        .required('Campo obrigatório'),

    cargo: Yup.string()
        .required('Campo obrigatório'),

    dataAdmissao: Yup.date()
        .required('Campo obrigatório')
        .nullable()
        .max(new Date(), 'A data de admissão não pode ser no futuro'),

    pisoSalarial: Yup.string()
        .matches(
            /^R\$\s?\d{1,4}(?:,\d{2})?$/,
            'O piso salarial deve estar no formato R$ 9999,99'
        )
        .required('Campo obrigatório')
});

export default cadastroFuncionariosValidator;
