// validators/pedidosValidator.js
import * as Yup from 'yup';

export const pedidoValidator = Yup.object({
    cliente: Yup.string()
        .required('Campo obrigatório'),
    produtos: Yup.array()
        .min(1, 'Selecione pelo menos um produto')
        .required('Campo obrigatório'),
    total: Yup.number()
        .positive('O total deve ser um valor positivo')
        .required('Campo obrigatório'),
});
