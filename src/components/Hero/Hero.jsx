import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import HeroStyles from '@/components/Hero/Hero.styles';
import Button, { ButtonContentTypes, ButtonTypes } from '../Button/Button';

const HeroTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

const Hero = ({ heroType }) => {
  const { t } = useTranslation();
  return (
    <HeroStyles className="contentContainer">
      <div className={`contentWrapper content ${heroType}`}>
        <div className="heroTextBlock">
          <h2 className="typoColorWhite typoTitleTertiary">{t('hero.title')}</h2>
          <p className="typoColorWhite typoTextPrimary heroDescription">{t('hero.description')}</p>
        </div>
        <div className="heroBtnWrapper">
          <Button
            btnType={ButtonTypes.PRIMARY}
            contentType={ButtonContentTypes.TEXT}
            content={t('hero.btn')}
          />
        </div>
      </div>
    </HeroStyles>
  );
};

export default Hero;

Hero.propTypes = {
  heroType: PropTypes.oneOf([HeroTypes.PRIMARY, HeroTypes.SECONDARY, HeroTypes.TERTIARY])
    .isRequired,
};
