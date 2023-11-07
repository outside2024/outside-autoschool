import { useTranslation } from 'next-i18next';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import DocumentsStyles from '@/components/Documents/Documents.styles';
import { cards } from './constants';

const Documents = () => {
  const { t } = useTranslation();
  return (
    <DocumentsStyles>
      <div className="contentContainer">
        <div className="contentWrapper">
          <h2 className="typoColorBlack gap typoTitleSecondary">{t('documents.title')}</h2>
        </div>
        <div className="contentWrapper content">
          <ul className="documents-container">
            {cards.map((card) => (
              <li key={uuidv4()} className={`card-item ${card.alt} background-img`}>
                <p className="typoColorBlack typoButtonPrimary gap-text">{t(`${card.text}`)}</p>
                <Image
                  src={card.src}
                  width={150}
                  height={123}
                  quality={85}
                  alt={card.alt}
                  className="card-images"
                  priority
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DocumentsStyles>
  );
};

export default Documents;
