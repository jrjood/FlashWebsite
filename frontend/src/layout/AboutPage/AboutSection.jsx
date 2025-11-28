import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/AboutPageWrappers/AboutSection';

const AboutSection = () => {
  const { t } = useTranslation('about');

  return (
    <Wrapper className='.section-container'>
      <div className='image-box' role='img' aria-label='img'></div>

      <div className='right'>
        <h3 className='title title-medium'>{t('about.title')}</h3>
        <p className='text'>{t('about.text')}</p>
        <p className='highlight'>{t('about.highlight')}</p>
        <Link to='/contact'>
          <button className='btn'>{t('about.button')}</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default AboutSection;
