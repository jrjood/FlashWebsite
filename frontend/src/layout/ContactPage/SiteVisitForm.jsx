import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactForm';
import { Link } from 'react-router-dom';

const SiteVisitForm = () => {
  const { t, i18n } = useTranslation('contact');
  const dateRef = useRef(null);

  const openPicker = () => {
    if (dateRef.current?.showPicker) dateRef.current.showPicker();
  };

  return (
    <Wrapper className='contact-section'>
      <div className='container'>
        <Link className='btn-container' to='/contact'>
          <button className='back-btn'>{t('contact.site_visit.back')}</button>
        </Link>
        <h2 className='form-title'>{t('contact.site_visit.title')}</h2>

        <form
          className='contact-form'
          action='https://api.web3forms.com/submit'
          method='POST'
        >
          <input
            type='hidden'
            name='access_key'
            value='ee1fbee7-4e02-4817-9ac5-c090294e2761'
          />

          <div className='left-fields'>
            <input
              type='text'
              name='fullName'
              placeholder={t('contact.site_visit.placeholders.full_name')}
              required
            />
            <input
              type='email'
              name='email'
              placeholder={t('contact.site_visit.placeholders.email')}
              required
            />
            <input
              type='tel'
              name='phone'
              placeholder={t('contact.site_visit.placeholders.phone')}
              required
              dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
            />
            <input
              ref={dateRef}
              type='date'
              name='date'
              placeholder={t('contact.site_visit.placeholders.date')}
              required
              dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
              onClick={openPicker}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openPicker();
                }
              }}
            />
          </div>

          <div className='right-fields'>
            <textarea
              name='message'
              placeholder={t('contact.site_visit.placeholders.message')}
              rows='15'
            />
            <button className='btn' type='submit'>
              {t('contact.site_visit.button')}
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default SiteVisitForm;
