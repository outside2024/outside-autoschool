import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import HeroSecondaryStyles from '@/components/HeroSecondary/HeroSecondary.styles';
import img from '../../../public/images/tests/hero.jpeg';
import imgСity from '../../../public/images/cities/img.jpeg';
import Exam from '../Exam';
import HeroDescription from '../HeroDescription/HeroDescription';

const HeroSecondary = () => {
  const city = {
    title: 'Новомосковськ',
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
        <div className={city ? 'container' : 'background'}>
          <div className="wrapper">
            <div className="left-container">
              <h2 className="typoColorBlack typoTitlePrimary gap">
                {city ? city.title : t('tests.title')}
              </h2>
              {city ? (
                <>
                  {city.phone && <p className="typoSubtitle ">{city.phone}</p>}
                  {city.address1 && <p className="typoSubtitle ">{city.address1}</p>}
                  {city.address2 && <p className="typoSubtitle gap">{city.address2}</p>}
                </>
              ) : (
                <p className="typoSubtitle gap">{t('tests.description')}</p>
              )}
              {city ? (
                <Link href="/" className="link typoSubtitle">
                  Сервісний центр МВС
                  <i className="icon-link " />
                </Link>
              ) : (
                <Link href="/" className="link typoSubtitle">
                  <i className="icon-save " />
                  Завантажити екзаменаційні питання
                </Link>
              )}
            </div>

            <Image
              src={city ? city.src : img}
              width={852}
              height={479}
              quality={85}
              alt="car"
              className="heroSecondaryImage"
              priority
            />
          </div>
          {city ? <HeroDescription /> : <Exam />}
        </div>
      </div>
    </HeroSecondaryStyles>
  );
};

export default HeroSecondary;
