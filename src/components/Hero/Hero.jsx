import {useTranslation} from 'next-i18next';
import PropTypes from 'prop-types';
import HeroStyles from '@/components/Hero/Hero.styles';
import Button, {ButtonContentTypes, ButtonTypes} from '../Button/Button';
import {scrollTo} from "@/global/helpers/helpers";

export const HeroTypes = {
  PRIMARY: 'homePageHero',
  SECONDARY: 'onlinePageHero',
  TERTIARY: 'aboutPageHero',
};

const Hero = ({heroType}) => {
  const {t} = useTranslation();
  return (
    <HeroStyles className="contentContainer">
      <div className={`contentWrapper content ${heroType}`}>
        <div className="heroTextBlock">
          <h2 className="typoColorWhite typoTitleTertiary">{t(`${heroType}.title`)}</h2>

          {heroType !== HeroTypes.TERTIARY && (
            <p className="typoColorWhite typoTextPrimary heroDescription">
              {t(`${heroType}.description`)}
            </p>
          )}
        </div>
        {heroType === HeroTypes.PRIMARY && (
          <div className="heroBtnWrapper">
            <Button
              btnType={ButtonTypes.PRIMARY}
              contentType={ButtonContentTypes.TEXT}
              content={t(`${heroType}.btn`)}
              onBtnClick={() => {
                scrollTo(document, 'form');
              }}
            />
          </div>
        )}
      </div>
    </HeroStyles>
  );
};

export default Hero;

Hero.propTypes = {
  heroType: PropTypes.oneOf([HeroTypes.PRIMARY, HeroTypes.SECONDARY, HeroTypes.TERTIARY])
    .isRequired,
};
