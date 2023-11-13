import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import HeroSecondaryStyles from '@/components/HeroSecondary/HeroSecondary.styles';
import img from '../../../public/images/tests/hero.jpeg';
import Exam from '../Exam';
import HeroDescription from '../HeroDescription';

const HeroSecondary = ({ city }) => {
  // const city = false;

  const { t } = useTranslation();

  return (
    <HeroSecondaryStyles>
      <div className="contentContainer">
        {city ? (
          <div className="container">
            <div className="wrapper">
              <div className="left-container">
                <h2 className="typoColorBlack typoTitlePrimary gap">{t(city.title)}</h2>
                {city.phone && <p className="typoTextPrimary">{city.phone}</p>}
                {city.phone2 && <p className="typoTextPrimary">{city.phone2}</p>}
                {city.address1 && <p className="typoTextPrimary">{t(city.address1)}</p>}
                {city.address2 && <p className="typoTextPrimary gap">{t(city.address2)}</p>}
                <Link href="/" className="link typoTextPrimary">
                  {t('tests.serviceCenter')}
                  <i className="icon-link " />
                </Link>
              </div>

              <Image
                src={city.src.photo}
                width={852}
                height={479}
                quality={85}
                alt={city.src.name}
                className="heroSecondaryImage"
              />
            </div>
            <HeroDescription city={t(city.name)} />
          </div>
        ) : (
          <div className="background">
            <div className="wrapper">
              <div className="left-container">
                <h2 className="typoColorBlack typoTitlePrimary gap">{t('tests.title')}</h2>
                <p className="typoTextPrimary gap">{t('tests.description')}</p>
                <Link href="/" className="link typoTextPrimary">
                  <i className="icon-save " />
                  {t('tests.downloadQuestions')}
                </Link>
              </div>

              <Image
                src={img}
                width={852}
                height={479}
                quality={85}
                alt="car"
                className="heroSecondaryImage"
              />
            </div>
            <Exam />
          </div>
        )}
      </div>
    </HeroSecondaryStyles>
  );
};

export default HeroSecondary;

HeroSecondary.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    phone: PropTypes.string,
    phone2: PropTypes.string,
    address1: PropTypes.string,
    address2: PropTypes.string,
    cities: PropTypes.string,
    src: PropTypes.shape({ photo: PropTypes.string, name: PropTypes.string }),
  }).isRequired,
};
