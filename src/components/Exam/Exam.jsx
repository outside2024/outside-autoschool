import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import ExamStyles from '@/components/Exam/Exam.styles';
import logo from '../../../public/images/exam/logo.jpeg';
import Button, { ButtonContentTypes, ButtonTypes } from '../Button/Button';

const Exam = () => {
  const { t } = useTranslation();
  return (
    <ExamStyles>
      <div className="wrapper-exam contentWrapper">
        <h2 className="typoColorBlack typoTitleSecondary">{t('exam.title')}</h2>
        <div className="exam-container">
          <Image
            src={logo}
            width={333}
            height={271}
            quality={85}
            alt="logo"
            className="exam-images"
            priority
          />

          <div className="container-data">
            <div className="data">
              <p className="typoTextPrimary">{t('exam.user')}</p>
              <p className="typoButtonPrimary">EXM_002197</p>
            </div>

            <div className="data">
              <p className="typoTextPrimary">{t('exam.password')}</p>
              <p className="typoButtonPrimary">EXM_002197</p>
            </div>
            <Button
              btnType={ButtonTypes.PRIMARY}
              contentType={ButtonContentTypes.TEXT}
              content={t('exam.button')}
            />
          </div>
        </div>
      </div>
    </ExamStyles>
  );
};

export default Exam;
