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
import strapiService from '@/global/services/strapiService';

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

    await strapiService.postStudyRequest({
      data: {
        name: values.name,
        surname: values.lastName,
        phone: values.phone,
        branch: values.branch,
        category: values.category,
        sendedAt: new Date().toLocaleString('en-US'),
      },
    });

    if (response) {
      setSubmitStatus(SubmitStatus.Success);
      resetForm();
    } else {
      setSubmitStatus(SubmitStatus.Error);
    }
  };

  const optionsBranch = [
    { value: t('[branch].dnipro.city'), label: t('[branch].dnipro.city') },
    { value: t('[branch].gvardiyske.city'), label: t('[branch].gvardiyske.city') },
    { value: t('[branch].pavlograd.city'), label: t('[branch].pavlograd.city') },
    { value: t('[branch].obuhivka.city'), label: t('[branch].obuhivka.city') },
    { value: t('[branch].novomoskovsk.city'), label: t('[branch].novomoskovsk.city') },
    { value: t('[branch].pidhorodne.city'), label: t('[branch].pidhorodne.city') },
    { value: t('[branch].nikopol.city'), label: t('[branch].nikopol.city') },
    { value: t('[branch].ilarionove.city'), label: t('[branch].ilarionove.city') },
    { value: t('[branch].preshchepyno.city'), label: t('[branch].preshchepyno.city') },
    { value: t('[branch].chumaky.city'), label: t('[branch].chumaky.city') },
    { value: t('[branch].zaporizhya.city'), label: t('[branch].zaporizhya.city') },
    { value: t('[branch].kryvyi_rig.city'), label: t('[branch].kryvyi_rig.city') },
    { value: t('[branch].kharkiv.city'), label: t('[branch].kharkiv.city') },
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
                <div className="formStatusMessage typoTitleSecondary">
                  {t('form.error_message')}
                </div>
              </div>
            ))}
        </div>
      </div>
    </FromComponentStyled>
  );
};

export default FormComponent;
