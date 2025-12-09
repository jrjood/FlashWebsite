import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logos from '../../assets/images/sponsorLogo';
import Wrapper from '../../assets/wrappers/LogoCarousel';

export default function LogoCarousel() {
  const { t, i18n } = useTranslation('home');
  const isRTL = i18n.dir() === 'rtl';
  const carouselKey = isRTL ? 'carousel-rtl' : 'carousel-ltr';

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <Wrapper className='section-container' $isRTL={isRTL} key={carouselKey}>
      <div className='carousel-container flex-center container'>
        <div className='btn-with-title'>
          <h2 className='title title-medium'>{t('logoCarousel.title')}</h2>
          <Link className='btn-container' to='clients'>
            <button className='btn'>{t('logoCarousel.button')}</button>
          </Link>
        </div>

        <div className='logo-track-container' dir={isRTL ? 'rtl' : 'ltr'}>
          <div className='logo-track'>
            {duplicatedLogos.map((logo, i) => (
              <div key={i} className='logo-item'>
                <img
                  src={logo.src}
                  loading='lazy'
                  decoding='async'
                  alt={logo.alt || `logo-${i}`}
                  draggable='false'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
