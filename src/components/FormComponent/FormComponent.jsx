import { Formik, Field, Form, ErrorMessage } from 'formik';
import Image from 'next/image';
import helmImage from 'public/images/helm.jpg';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { dataFormValidationSchema } from '@/components/FormComponent/validation';
import FromComponentStyled from '@/components/FormComponent/FormComponent.styled';
import Button from '@/components/Button';
import { ButtonContentTypes, ButtonTypes } from '@/components/Button/Button';
import Select from '@/components/FormComponent/components/Select/Select';
import { sendForm } from '@/components/FormComponent/telegram';
import iconCheck from '../../../public/icon-check.svg';

const SubmitStatus = {
  Idle: 'Idle',
  Success: 'Success',
  Error: 'Error',
};

const FormComponent = () => {
  const { t } = useTranslation();

  const [submitStatus, setSubmitStatus] = useState(SubmitStatus.Idle);

  const initialValues = {
    name: '',
    lastName: '',
    phone: '',
    branch: null,
    category: null,
  };

  const handleSubmit = async (values, { resetForm }) => {
    const response = await sendForm(values);

    if (response) {
      setSubmitStatus(SubmitStatus.Success);
      resetForm();
    } else {
      setSubmitStatus(SubmitStatus.Error);
    }
  };

  const optionsBranch = [
    { value: t('form.options_branch.dnipro'), label: t('form.options_branch.dnipro') },
    { value: t('form.options_branch.gvardiyske'), label: t('form.options_branch.gvardiyske') },
    { value: t('form.options_branch.pavlograd'), label: t('form.options_branch.pavlograd') },
    { value: t('form.options_branch.obuhivka'), label: t('form.options_branch.obuhivka') },
    { value: t('form.options_branch.novomoskovsk'), label: t('form.options_branch.novomoskovsk') },
    { value: t('form.options_branch.pidhorodne'), label: t('form.options_branch.pidhorodne') },
    { value: t('form.options_branch.nikopol'), label: t('form.options_branch.nikopol') },
    { value: t('form.options_branch.ilarionove'), label: t('form.options_branch.ilarionove') },
    { value: t('form.options_branch.preshchepyno'), label: t('form.options_branch.preshchepyno') },
    { value: t('form.options_branch.chumaky'), label: t('form.options_branch.chumaky') },
    { value: t('form.options_branch.zaporizhya'), label: t('form.options_branch.zaporizhya') },
    { value: t('form.options_branch.kryvyi_rih'), label: t('form.options_branch.kryvyi_rih') },
    { value: t('form.options_branch.kharkiv'), label: t('form.options_branch.kharkiv') },
  ];

  const optionsCategory = [
    { value: t('form.options_category.A'), label: t('form.options_category.A') },
    { value: t('form.options_category.B'), label: t('form.options_category.B') },
    { value: t('form.options_category.C'), label: t('form.options_category.C') },
    { value: t('form.options_category.A_B'), label: t('form.options_category.A_B') },
    { value: t('form.options_category.B_C'), label: t('form.options_category.B_C') },
    { value: t('form.options_category.A_B_C'), label: t('form.options_category.A_B_C') },
    { value: t('form.options_category.D'), label: t('form.options_category.D') },
    { value: t('form.options_category.CE'), label: t('form.options_category.CE') },
    { value: t('form.options_category.D_C'), label: t('form.options_category.D_C') },
  ];

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
            className="formImage"
          />
          {(submitStatus === SubmitStatus.Idle && (
            <Formik
              initialValues={initialValues}
              validationSchema={dataFormValidationSchema}
              onSubmit={handleSubmit}
            >
              {(errors, touched) => (
                <Form className="formContainer">
                  <div>
                    <div className="container">
                      <div className="fieldContainer">
                        <label htmlFor="name" className="labelText">
                          {t('form.field.name')}
                        </label>
                        <Field
                          name="name"
                          placeholder={t('form.field.name_placeholder')}
                          className="input"
                          errors={errors}
                          touched={touched}
                          required
                        />
                        <ErrorMessage
                          name="name"
                          render={(msg) => <div className="formError">{t(msg)}</div>}
                        />
                      </div>
                      <div className="fieldContainer">
                        <label htmlFor="lastName" className="labelText">
                          {t('form.field.last_name')}
                        </label>
                        <Field
                          name="lastName"
                          placeholder={t('form.field.last_name_placeholder')}
                          className="input"
                          required
                        />
                        <ErrorMessage
                          name="lastName"
                          render={(msg) => <div className="formError">{t(msg)}</div>}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="fieldContainer">
                    <label htmlFor="phone" className="labelText">
                      {t('form.field.phone')}
                    </label>
                    <Field
                      name="phone"
                      placeholder="+38 (0ХХ) ХХХ-ХХ-ХХ"
                      className="input"
                      required
                    />
                    <ErrorMessage
                      name="phone"
                      render={(msg) => <div className="formError">{t(msg)}</div>}
                    />
                  </div>

                  <div className="container">
                    <div className="formErrorContainer">
                      <Select
                        name="branch"
                        selectOptions={optionsBranch}
                        placeholder={t('form.field.branch_placeholder')}
                        label={t('form.field.branch')}
                        instanceId="branch"
                      />
                      <ErrorMessage
                        name="branch"
                        render={(msg) => <div className="formError">{t(msg)}</div>}
                      />
                    </div>
                    <div className="formErrorContainer">
                      <Select
                        name="category"
                        selectOptions={optionsCategory}
                        placeholder={t('form.field.category_placeholder')}
                        label={t('form.field.category')}
                        instanceId="category"
                      />
                      <ErrorMessage
                        name="category"
                        render={(msg) => <div className="formError">{t(msg)}</div>}
                      />
                    </div>
                  </div>

                  <div className="buttonWrapper">
                    <Button
                      btnType={ButtonTypes.PRIMARY}
                      contentType={ButtonContentTypes.TEXT}
                      content={t('form.button')}
                      onBtnClick={() => {
                        setSubmitStatus(SubmitStatus.Idle);
                      }}
                      type="submit"
                    />
                  </div>
                </Form>
              )}
            </Formik>
          )) ||
            (submitStatus === SubmitStatus.Success && (
              <div className="formStatusContainer">
                <i
                  className="icon-close formStatusCloseIcon"
                  onClick={() => {
                    setSubmitStatus(SubmitStatus.Idle);
                  }}
                />
                <Image
                  src={iconCheck}
                  width={56}
                  height={56}
                  alt="iconCheck"
                  className="formStatusCheckIcon"
                />
                <div className="formStatusMessage">{t('form.success_message')}</div>
              </div>
            )) ||
            (submitStatus === SubmitStatus.Error && (
              <div className="formStatusContainer">
                <i
                  className="icon-close formStatusCloseIcon"
                  onClick={() => {
                    setSubmitStatus(SubmitStatus.Idle);
                  }}
                />
                <div className="formStatusMessage">{t('form.error_message')}</div>
              </div>
            ))}
        </div>
      </div>
    </FromComponentStyled>
  );
};

export default FormComponent;
