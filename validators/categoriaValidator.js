import * as Yup from 'yup';

const categoriaValidator = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'O nome da categoria deve ter no mínimo 3 caracteres')
    .max(45, 'O nome da categoria pode ter no máximo 45 caracteres')
    .required('Campo obrigatório'),
});

export default categoriaValidator;
