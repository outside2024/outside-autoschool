import {useTranslation} from 'next-i18next';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import StyledAboutUs from "@/components/AboutUs/AboutUs.styles";

import {aboutUsPhotoSlider} from "@/components/AboutUs/data";


const AboutUs = () => {
    const {t} = useTranslation();
    return (
        <StyledAboutUs>
            <div className="contentWrapper">
                <h2 className="typoColorBlack typoTitleSecondary">{t('aboutUs.title')}</h2>
                <h3 className="typoColorBlack typoSubtitle">{t('aboutUs.subtitle')}</h3>
                <div className="swiperContainer">
                    <Swiper
                        slidesPerView="auto"
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            1300: { slidesPerView: 3 },
                            1440: { slidesPerView: 5 },
                        }}
                    >
                        {aboutUsPhotoSlider.map((card) => (
                            <SwiperSlide key={card.id} className="swiperSlide" >

                                <div>
                                    <Image src={card.photo} width={229} height={304} quality={85} alt="teacher photo"/>
                                    <div>{card.name}</div>
                                    <div>{card.experience}</div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </StyledAboutUs>
    );
};

export default AboutUs;