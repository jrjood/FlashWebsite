import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactForm';

const ContactForm = () => {
  const { t, i18n } = useTranslation('contact');

  return (
    <Wrapper className='contact-section'>
      <div className='container'>
        <Link className='btn-container' to='/contact'>
          <button className='back-btn'>{t('contact.form.back')}</button>
        </Link>
        <h2 className='form-title'>{t('contact.form.title')}</h2>
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
              placeholder={t('contact.form.placeholders.full_name')}
              required
            />
            <input
              type='email'
              name='email'
              placeholder={t('contact.form.placeholders.email')}
              required
            />
            <input
              type='tel'
              name='phone'
              placeholder={t('contact.form.placeholders.phone')}
              required
              dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
            />
            <input
              type='text'
              name='jobTitle'
              placeholder={t('contact.form.placeholders.job_title')}
            />
            <input
              type='text'
              name='companyName'
              placeholder={t('contact.form.placeholders.company_name')}
            />
          </div>
          <div className='right-fields'>
            <textarea
              name='message'
              placeholder={t('contact.form.placeholders.message')}
              rows='15'
            />
            <button className='btn' type='submit'>
              {t('contact.form.button')}
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
