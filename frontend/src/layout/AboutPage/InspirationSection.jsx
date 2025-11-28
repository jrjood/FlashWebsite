import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/InspirationSection';

const InspirationSection = () => {
  const { t, i18n } = useTranslation('about');
  const isRtl = i18n.language?.startsWith('ar');

  return (
    <Wrapper
      $rtl={isRtl}
      dir={isRtl ? 'rtl' : 'ltr'}
      style={{ border: 'none' }}
    >
      <div className='container'>
        <div className='content '>
          <div className='row'>
            <h3 className='title title-extra'>
              {t('inspiration.mission_title')}
            </h3>
            <div className='text-box'>
              <p>{t('inspiration.mission_text')}</p>
            </div>
          </div>
          <div className='row'>
            <h3 className='title title-extra'>
              {t('inspiration.vision_title')}
            </h3>
            <div className='text-box'>
              <p>{t('inspiration.vision_text')}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default InspirationSection;
