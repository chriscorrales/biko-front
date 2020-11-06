import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'Este campo é obrigatório',
  },
  string: {
    email: 'Endereço de e-mail inválido',
  },
});

export default Yup;
