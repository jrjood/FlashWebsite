import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

import logos from '../../assets/images/sponsorLogo';
import Wrapper from '../../assets/wrappers/LogoCarousel';

export default function LogoCarousel() {
  const { t, i18n } = useTranslation('home');
  const isRTL = i18n.dir() === 'rtl';
  const swiperKey = isRTL ? 'logos-rtl' : 'logos-ltr';

  return (
    <Wrapper className='section-container'>
      <div className='carousel-container flex-center container'>
        <div className='btn-with-title'>
          <h2 className='title title-medium'>{t('logoCarousel.title')}</h2>
          <Link className='btn-container' to='clients'>
            <button className='btn'>{t('logoCarousel.button')}</button>
          </Link>
        </div>

        <div className='logo-container' dir={isRTL ? 'rtl' : 'ltr'}>
          <Swiper
            key={swiperKey}
            dir={isRTL ? 'rtl' : 'ltr'}
            modules={[Autoplay]}
            observer
            observeParents
            spaceBetween={30}
            loop={true}
            loopAdditionalSlides={5}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: isRTL,
            }}
            breakpoints={{
              200: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              769: { slidesPerView: 5 },
            }}
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className='logo-item'>
                  <img
                    src={logo.src}
                    alt={logo.alt || `logo-${i}`}
                    loading='lazy'
                    draggable='false'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
}
