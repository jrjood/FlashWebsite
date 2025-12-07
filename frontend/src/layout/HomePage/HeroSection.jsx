import heroVideo from '../../assets/images/backgrounds/HomePageImages/hero-bg.mp4';
import Wrapper from '../../assets/wrappers/HomePageWrappers/HeroSection';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';
import { ScrollReveal } from '../../components/ScrollReveal';

const HeroSection = () => {
  const { t } = useTranslation('home');
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal({
    threshold: 0.2,
  });

  return (
    <Wrapper id='hero' className='section-container' ref={heroRef}>
      <div>
        <div className='overlay' />
        <video
          className='background-video'
          id='hero-video'
          autoPlay
          loop
          muted
          playsInline
          preload='auto'
          src={heroVideo}
          type='video/mp4'
          style={{ willChange: 'transform' }}
        ></video>
      </div>

      <div className='content '>
        <ScrollReveal
          $isVisible={heroVisible}
          $animation='fadeInLeft'
          $duration='1s'
        >
          <div className='left flex-center'>
            <div className='info'>
              <h2>{t('hero.line1')}</h2>
              <h2>{t('hero.line2')}</h2>
              {/* <p>{t('hero.line3')}</p> */}
              {/* <p>{t('hero.line4')}</p> */}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal
          $isVisible={heroVisible}
          $animation='fadeInRight'
          $duration='1s'
          $delay='0.2s'
        >
          <div className='right '>
            <p>{t('hero.paragraph')}</p>
            <Link className='btn-container' to='about'>
              <button className='btn'>{t('hero.button')}</button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
