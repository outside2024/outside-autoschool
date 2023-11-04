import * as Yup from 'yup';

export const dataFormValidationSchema = Yup.object().shape({
  name: Yup.string().max(40, 'Too long').required('This field is required'),
  lastName: Yup.string().max(40, 'Too long').required('This field is required'),
  phone: Yup.string()
    .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Invalid phone number')
    .required('This field is required'),
  branch: Yup.string().required('This field is required'),
  category: Yup.string().required('This field is required'),
});