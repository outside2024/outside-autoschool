import {Formik, Field, Form, ErrorMessage} from "formik";
import {dataFormValidationSchema} from "@/components/FormComponent/validation";
import FromComponentStyled from "@/components/FormComponent/FormComponent.styled";


const SubmitStatus = {
  Idle : "Idle",
  Success: "Success",
  Error: "Error",
}
const FormComponent =()=> {
  const initialValues = {
    name: '',
    lastName:'',
    phone:'',
    branch: '',
    category: ''
  };

  const handleSubmit = (values) => {

    console.log('FormComponent submitted with values:', values);
  };

  return (
    <FromComponentStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={dataFormValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor='name'>Name</label>
              <Field  name="name"  placeholder="Введіть ім'я"/>
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>


    </FromComponentStyled>
  )
}

export default FormComponent;