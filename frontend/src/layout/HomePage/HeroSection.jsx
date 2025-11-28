import heroVideo from '../../assets/images/backgrounds/HomePageImages/hero-bg.mp4';
import Wrapper from '../../assets/wrappers/HomePageWrappers/HeroSection';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation('home');

  return (
    <Wrapper id='hero' className='section-container'>
      <div>
        <div className='overlay' />
        <video
          className='background-video'
          id='hero-video'
          autoPlay
          loop
          muted
          playsInline
          src={heroVideo}
          type='video/mp4'
        ></video>
      </div>

      <div className='content '>
        <div className='left flex-center'>
          <div className='info'>
            <p>{t('hero.line1')}</p>
            <p>{t('hero.line2')}</p>
            {/* <p>{t('hero.line3')}</p> */}
            {/* <p>{t('hero.line4')}</p> */}
          </div>
        </div>
        <div className='right '>
          <p>{t('hero.paragraph')}</p>
          <Link className='btn-container' to='about'>
            <button className='btn'>{t('hero.button')}</button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
