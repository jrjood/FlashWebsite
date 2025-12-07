import { Link } from 'react-router-dom';
import { Logo } from '../../components';
import Wrapper from '../../assets/wrappers/HomePageWrappers/AboutSection';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';
import { ScrollReveal } from '../../components/ScrollReveal';

const AboutSection = () => {
  const { t } = useTranslation('home'); // or 'about' if you split namespaces
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
          <Logo />
        </ScrollReveal>

        <ScrollReveal
          $isVisible={aboutVisible}
          $animation='fadeInRight'
          $duration='0.8s'
          $delay='0.4s'
        >
          <p className='text'>{t('about.paragraph')}</p>
        </ScrollReveal>

        <ScrollReveal
          $isVisible={aboutVisible}
          $animation='fadeInRight'
          $duration='0.8s'
          $delay='0.6s'
        >
          <h2 className='highlight'>{t('about.highlight')}</h2>
        </ScrollReveal>

        <ScrollReveal
          $isVisible={aboutVisible}
          $animation='fadeInUp'
          $duration='0.8s'
          $delay='0.8s'
        >
          <Link to='contact'>
            <button className='btn'>{t('about.button')}</button>
          </Link>
        </ScrollReveal>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
