import * as Yup from 'yup';

export const dataFormValidationSchema = Yup.object().shape({
  name: Yup.string().max(40, 'Too long').required("Обов'язкове поле"),
  lastName: Yup.string().max(40, 'Too long').required("Обов'язкове поле"),
  phone: Yup.string()
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
      'Неправильний номер телефону',
    )
    .required('This field is required'),
  branch: Yup.string().required("Обов'язкове поле"),
  category: Yup.string().required("Обов'язкове поле"),
});
