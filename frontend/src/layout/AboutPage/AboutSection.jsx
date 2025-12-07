import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/AboutPageWrappers/AboutSection';
import useScrollReveal from '../../hooks/useScrollReveal';
import { ScrollReveal } from '../../components/ScrollReveal';

const AboutSection = () => {
  const { t } = useTranslation('about');
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollReveal({
    threshold: 0.2,
  });

  return (
    <Wrapper className='.section-container' ref={aboutRef}>
      <ScrollReveal
        $isVisible={aboutVisible}
        $animation='fadeInLeft'
        $duration='1s'
        className='image-box'
        role='img'
        aria-label='img'
      />

      <div className='right'>
        <ScrollReveal
          $isVisible={aboutVisible}
          $animation='fadeInRight'
          $duration='0.8s'
          $delay='0.2s'
        >
          <h3 className='title title-medium'>{t('about.title')}</h3>
        </ScrollReveal>

        <ScrollReveal
          $isVisible={aboutVisible}
          $animation='fadeInRight'
          $duration='0.8s'
          $delay='0.4s'
        >
          <p className='text'>{t('about.text1')}</p>
          <p className='text'>{t('about.text2')}</p>
        </ScrollReveal>

        <ScrollReveal
          $isVisible={aboutVisible}
          $animation='fadeInRight'
          $duration='0.8s'
          $delay='0.6s'
        >
          <p className='highlight'>{t('about.highlight')}</p>
        </ScrollReveal>

        <ScrollReveal
          $isVisible={aboutVisible}
          $animation='fadeInUp'
          $duration='0.8s'
          $delay='0.8s'
        >
          <Link to='/contact'>
            <button className='btn'>{t('about.button')}</button>
          </Link>
        </ScrollReveal>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
