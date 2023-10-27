import { useTranslation } from 'next-i18next';
import HeroStyles from '@/components/Hero/Hero.styled';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <HeroStyles>
      <div className="contentContainer">
        <div className="contentWrapper">
          <h2 className="typoColorWhite">{t('hero.title')}</h2>
          <i className="icon-facebook" />
        </div>
      </div>
    </HeroStyles>
  );
};

export default Hero;
