import * as Yup from 'yup';

export const dataFormValidationSchema = Yup.object().shape({
  name: Yup.string().max(40, 'form.error_too_long').required('form.error_required'),
  lastName: Yup.string().max(40, 'form.error_too_long').required('form.error_required'),
  phone: Yup.string()
    .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'form.error_phone')
    .required('form.error_required'),
  branch: Yup.string().required('form.error_required'),
  category: Yup.string().required('form.error_required'),
});
