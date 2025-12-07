import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/InspirationSection';
import useScrollReveal from '../../hooks/useScrollReveal';
import { ScrollReveal } from '../../components/ScrollReveal';

const InspirationSection = () => {
  const { t, i18n } = useTranslation('about');
  const isRtl = i18n.language?.startsWith('ar');
  const { ref: inspirationRef, isVisible: inspirationVisible } =
    useScrollReveal({
      threshold: 0.2,
    });

  return (
    <Wrapper
      $rtl={isRtl}
      dir={isRtl ? 'rtl' : 'ltr'}
      style={{ border: 'none' }}
      ref={inspirationRef}
    >
      <div className='container'>
        <div className='content '>
          <ScrollReveal
            $isVisible={inspirationVisible}
            $animation='fadeInLeft'
            $duration='0.8s'
          >
            <div className='row'>
              <h3 className='title title-extra'>
                {t('inspiration.mission_title')}
              </h3>
              <div className='text-box'>
                <p>{t('inspiration.mission_text')}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal
            $isVisible={inspirationVisible}
            $animation='fadeInRight'
            $duration='0.8s'
            $delay='0.3s'
          >
            <div className='row'>
              <h3 className='title title-extra'>
                {t('inspiration.vision_title')}
              </h3>
              <div className='text-box'>
                <p>{t('inspiration.vision_text')}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Wrapper>
  );
};

export default InspirationSection;
