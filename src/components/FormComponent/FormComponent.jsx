import {Formik, Field, Form, ErrorMessage} from "formik";
import Image from "next/image";
import helmImage from 'public/images/helm.jpg';
import { useTranslation } from 'next-i18next';
import {dataFormValidationSchema} from "@/components/FormComponent/validation";
import FromComponentStyled from "@/components/FormComponent/FormComponent.styled";


const SubmitStatus = {
  Idle: "Idle",
  Success: "Success",
  Error: "Error",
}
const FormComponent = () => {
  const { t } = useTranslation();
  const initialValues = {
    name: '',
    lastName: '',
    phone: '',
    branch: '',
    category: ''
  };

  const handleSubmit = (values) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks


    console.log('FormComponent submitted with values:', values);
  };

  return (
    <FromComponentStyled className="contentContainer">
      <div className="contentWrapper">
        <h2 className="typoColorBlack typoTitleSecondary">{t('form.title')}</h2>
        <div className="content">
          <Image
            src={helmImage}
            alt="helm"
            priority
            width={665}
            height={351}
            quality={85}

          />
          <div className="formContainer">
            <Formik
              initialValues={initialValues}
              validationSchema={dataFormValidationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form>
                  <div>
                    <div className="fieldContainer">
                      <label htmlFor='name'>{t('form.field.name')}</label>
                      <Field name="name" placeholder={t('form.field.name_placeholder')}/>
                    </div>
                    <div>
                      <label htmlFor='lastname'>{t('form.field.last_name')}</label>
                      <Field name="lastname" placeholder={t('form.field.last_name_placeholder')}/>
                    </div>
                    <div>
                      <label htmlFor='phone'>{t('form.field.phone')}</label>
                      <Field name="phone" placeholder="+38 (0ХХ) ХХХ-ХХ-ХХ"/>
                    </div>
                  </div>

                  <button type="submit">Submit</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>

      </div>
    </FromComponentStyled>
  )
}

export default FormComponent;