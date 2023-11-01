import { useTranslation } from 'next-i18next';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import GalleryStyles from '@/components/Gallery/Gallery.styles';
import { galleryRow1, galleryRow2, galleryRow3 } from './constants';

const Gallery = () => {
  const { t } = useTranslation();
  return (
    <GalleryStyles>
      <div className="contentContainer">
        <div className="contentWrapper">
          <h2 className="typoColorBlack gap typoTitleSecondary">{t('gallery.title')}</h2>

          <ul className="gallery">
            {galleryRow1.map((item) => (
              <li key={uuidv4()} className={item.alt}>
                <Image
                  src={item.src}
                  width={300}
                  height={316}
                  quality={85}
                  alt={item.alt}
                  className="gallery-images"
                  priority
                />
              </li>
            ))}
          </ul>

          <ul className="gallery">
            {galleryRow2.map((item) => (
              <li key={uuidv4()} className={item.alt}>
                <Image
                  src={item.src}
                  width={300}
                  height={316}
                  quality={85}
                  alt={item.alt}
                  className="gallery-images"
                  priority
                />
              </li>
            ))}
          </ul>

          <ul className="gallery">
            {galleryRow3.map((item) => (
              <li key={uuidv4()} className={item.alt}>
                <Image
                  src={item.src}
                  width={300}
                  height={316}
                  quality={85}
                  alt={item.alt}
                  className="gallery-images"
                  priority
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </GalleryStyles>
  );
};

export default Gallery;
