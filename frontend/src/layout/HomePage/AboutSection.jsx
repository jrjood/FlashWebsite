import { Link } from 'react-router-dom';
import { Logo } from '../../components';
import Wrapper from '../../assets/wrappers/HomePageWrappers/AboutSection';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation('home'); // or 'about' if you split namespaces

  return (
    <Wrapper className='.section-container'>
      <div className='image-box' role='img ' aria-label='img'></div>

      <div className='right'>
        <Logo />
        <p className='text'>{t('about.paragraph')}</p>
        <p className='highlight'>{t('about.highlight')}</p>
        <Link to='contact'>
          <button className='btn'>{t('about.button')}</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
