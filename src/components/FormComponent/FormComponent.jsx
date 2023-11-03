import {Formik, Field, Form, ErrorMessage} from "formik";
import Image from "next/image";
import helmImage from 'public/images/helm.jpg';
import {useTranslation} from 'next-i18next';
import {dataFormValidationSchema} from "@/components/FormComponent/validation";
import FromComponentStyled from "@/components/FormComponent/FormComponent.styled";
import Button from "@/components/Button";
import {ButtonContentTypes, ButtonTypes} from "@/components/Button/Button";
import Select from "@/components/FormComponent/components/Select/Select";


const SubmitStatus = {
  Idle: "Idle",
  Success: "Success",
  Error: "Error",
}


const FormComponent = () => {
  const {t} = useTranslation();
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

  const optionsBranch = [
    {value: t('form.options_branch.dnipro'), label: t('form.options_branch.dnipro')},
    {value: t('form.options_branch.gvardiyske'), label: t('form.options_branch.gvardiyske')},
    {value: t('form.options_branch.pavlograd'), label: t('form.options_branch.pavlograd')},
    {value: t('form.options_branch.obuhivka'), label: t('form.options_branch.obuhivka')},
    {value: t('form.options_branch.novomoskovsk'), label: t('form.options_branch.novomoskovsk')},
    {value: t('form.options_branch.pidhorodne'), label: t('form.options_branch.pidhorodne')},
    {value: t('form.options_branch.nikopol'), label: t('form.options_branch.nikopol')},
    {value: t('form.options_branch.ilarionove'), label: t('form.options_branch.ilarionove')},
    {value: t('form.options_branch.preshchepyno'), label: t('form.options_branch.preshchepyno')},
    {value: t('form.options_branch.chumaky'), label: t('form.options_branch.chumaky')},
    {value: t('form.options_branch.zaporizhya'), label: t('form.options_branch.zaporizhya')},
    {value: t('form.options_branch.kryvyi_rih'), label: t('form.options_branch.kryvyi_rih')},
    {value: t('form.options_branch.kharkiv'), label: t('form.options_branch.kharkiv')},
  ]

  const optionsCategory = [
    {value: t('form.options_category.A'), label:t('form.options_category.A')},
    {value: t('form.options_category.B'), label:t('form.options_category.B')},
    {value: t('form.options_category.C'), label:t('form.options_category.C')},
    {value: t('form.options_category.A_B'), label:t('form.options_category.A_B')},
    {value: t('form.options_category.B_C'), label:t('form.options_category.B_C')},
    {value: t('form.options_category.A_B_C'), label:t('form.options_category.A_B_C')},
    {value: t('form.options_category.D'), label:t('form.options_category.D')},
    {value: t('form.options_category.CE'), label:t('form.options_category.CE')},
    {value: t('form.options_category.D_C'), label:t('form.options_category.D_C')},
  ]


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
            <Formik
              initialValues={initialValues}
              validationSchema={dataFormValidationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="formContainer">
                  <div>
                    <div className="container">
                      <div className="fieldContainer">
                        <label htmlFor='name' className="labelText">{t('form.field.name')}</label>
                        <Field
                          name="name"
                          placeholder={t('form.field.name_placeholder')}
                          className="input"
                          required
                        />
                      </div>
                      <div className="fieldContainer">
                        <label htmlFor='lastname' className="labelText">{t('form.field.last_name')}</label>
                        <Field name="lastname" placeholder={t('form.field.last_name_placeholder')} className="input"
                               required/>
                      </div>
                    </div>
                    <div className="fieldContainer">
                      <label htmlFor='phone' className="labelText">{t('form.field.phone')}</label>
                      <Field name="phone" placeholder="+38 (0ХХ) ХХХ-ХХ-ХХ" className="input" required/>
                    </div>
                  </div>
                  <div className="container">
                    <Select
                      name={t('form.field.branch')}
                      selectOptions={optionsBranch}
                      placeholder={t('form.field.branch_placeholder')}
                      label={t('form.field.branch')}
                    />

                    <Select
                      name={t('form.field.category')}
                      selectOptions={optionsCategory}
                      placeholder={t('form.field.category_placeholder')}
                      label={t('form.field.category')}
                    />
                  </div>


                  {/* <button type="submit">Submit</button> */}
                  <Button
                    btnType={ButtonTypes.PRIMARY}
                    contentType={ButtonContentTypes.TEXT}
                    content={t('form.button')}
                  />
                </Form>
              )}
            </Formik>
        </div>

      </div>
    </FromComponentStyled>
  )
}

export default FormComponent;