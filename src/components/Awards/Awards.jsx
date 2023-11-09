import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { StyledAwards } from '@/components/Awards/Awards.styled';
import awardImg from '../../../public/images/awards/award.jpg';
import ratingImg from '../../../public/images/awards/rating.jpg';

const Awards = () => {
  const { t } = useTranslation();
  return (
    <StyledAwards className="contentContainer">
      <div className="contentWrapper award">
        <div>
          <h2 className="typoColorBlack typoTitleSecondary">{t('awards.title')}</h2>
          <div className="typoColorBlack typoSubtitle awardDescription">
            {t('awards.description')}
          </div>
        </div>
        <div className="awardContainer">
          <Image
            src={awardImg}
            width={397}
            height={456}
            alt="award"
            quality={85}
            priority
            className="awardImg"
          />
          <Image
            src={ratingImg}
            width={397}
            height={456}
            alt="award"
            quality={85}
            priority
            className="awardImg"
          />
        </div>
      </div>
    </StyledAwards>
  );
};

export default Awards;
