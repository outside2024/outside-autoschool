import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import HeroDescriptionStyles from '@/components/HeroDescription/HeroDescription.styles';

const HeroDescription = ({ city }) => {
  const { t } = useTranslation();
  return (
    <HeroDescriptionStyles>
      {city ? (
        <div className="contentWrapper flex-container">
          <p className="typoColorBlack typoTextPrimary width">
            {t('heroDescription.description1')}
            {city}
            {t('heroDescription.description2')}
          </p>
          <p className="typoColorBlack typoTextPrimary width">
            {t('heroDescription.description3')}
          </p>
        </div>
      ) : (
        <div className="contentWrapper flex-container">
          <p className="typoColorBlack typoTextPrimary width">
            {t('heroDescription.description4')}
          </p>
          <p className="typoColorBlack typoTextPrimary width">
            {t('heroDescription.description5')}
          </p>
        </div>
      )}
    </HeroDescriptionStyles>
  );
};

export default HeroDescription;

HeroDescription.propTypes = {
  city: PropTypes.string.isRequired,
};
