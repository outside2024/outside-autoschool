import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import HeroSecondaryStyles from '@/components/HeroSecondary/HeroSecondary.styles';
import img from '../../../public/images/tests/hero.jpeg';
import imgСity from '../../../public/images/cities/img.jpeg';
import Exam from '../Exam';
import HeroDescription from '../HeroDescription';

const HeroSecondary = () => {
  const city = {
    title: 'Новомосковськ',
    name: 'Новомосковську',
    src: imgСity,
    phone: '(097) 696-72-72 ',
    address1: '| вул. Гетьманська 40-А',
    address2: '| вул. Українська 9-А',
  };

  // const city = false;

  const { t } = useTranslation();

  return (
    <HeroSecondaryStyles>
      <div className="contentContainer">
        {city ? (
          <div className="container">
            <div className="wrapper">
              <div className="left-container">
                <h2 className="typoColorBlack typoTitlePrimary gap">{city.title}</h2>
                {city.phone && <p className="typoTextPrimary">{city.phone}</p>}
                {city.address1 && <p className="typoTextPrimary">{city.address1}</p>}
                {city.address2 && <p className="typoTextPrimary gap">{city.address2}</p>}
                <Link href="/" className="link typoTextPrimary">
                  {t('tests.serviceCenter')}
                  <i className="icon-link " />
                </Link>
              </div>

              <Image
                src={city.src}
                width={852}
                height={479}
                quality={85}
                alt={city.title}
                className="heroSecondaryImage"
                priority
              />
            </div>
            <HeroDescription city={city.name} />
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
                priority
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
