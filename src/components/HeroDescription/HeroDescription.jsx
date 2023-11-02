import { useTranslation } from 'next-i18next';
import HeroDescriptionStyles from '@/components/HeroDescription/HeroDescription.styles';

const HeroDescription = () => {
  const { t } = useTranslation();
  return (
    <HeroDescriptionStyles>
      <div className="contentWrapper flex-container">
        <p className="typoColorBlack typoTextPrimary">{t('heroDescription.description1')}</p>
        <p className="typoColorBlack typoTextPrimary">{t('heroDescription.description2')}</p>
      </div>
    </HeroDescriptionStyles>
  );
};

export default HeroDescription;
