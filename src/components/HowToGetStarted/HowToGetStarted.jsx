import { useTranslation } from 'next-i18next';
import { v4 as uuidv4 } from 'uuid';
import HowToGetStartedStyles from './HowToGetStarted.styled';
import { data } from './constants';

const HowToGetStarted = () => {
  const { t } = useTranslation();
  return (
    <HowToGetStartedStyles>
      <div className="contentContainer">
        <div className="contentWrapper">
          <h2 className="typoColorBlack typoTitleSecondary">{t('howToGetStarted.title')}</h2>
          <div className="flexContainer">
            <ul className="list">
              {data.map((item) => (
                <li className="typoTextPrimary" key={uuidv4()}>
                  {t(item)}
                </li>
              ))}
            </ul>
            <div className="flex-container-column">
              <iframe
                className="video"
                width="588"
                height="300"
                src="https://www.youtube.com/embed/-4xYhU-0Trg"
                title={t('howToGetStarted.titleVideo1')}
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
                frameBorder="0"
              />
              <iframe
                className="video"
                width="588"
                height="300"
                src="https://www.youtube.com/embed/at4aAxl9ScQ"
                title={t('howToGetStarted.titleVideo2')}
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </div>
    </HowToGetStartedStyles>
  );
};

export default HowToGetStarted;
