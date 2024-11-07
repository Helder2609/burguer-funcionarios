import * as Yup from 'yup';

const avaliacoesValidator = Yup.object().shape({
    nome: Yup.string()
        .min(3, 'O mínimo de caracteres é 3')
        .max(45, 'O máximo de caracteres é 45')
        .required('Campo obrigatório'),
    comentario: Yup.string()
        .min(3, 'O mínimo de caracteres é 3')
        .max(45, 'O máximo de caracteres é 45')
        .required('deixe seu comentário '),


});

export default avaliacoesValidator;