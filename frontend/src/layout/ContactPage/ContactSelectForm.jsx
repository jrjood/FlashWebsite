import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactSelectForm';
import { Link } from 'react-router-dom';

const ContactSelectForm = () => {
  // use the "common" namespace
  const { t } = useTranslation('contact');

  return (
    <Wrapper>
      <div className='section-container'>
        <h3 className='title'>{t('contact.select.title')}</h3>

        <div className='contact-top flex-center'>
          <div className='contact-item'>
            <Link className='btn-container' to='/contact/contact-us'>
              {/* Internal navigation => no target/rel on a <button> */}
              <button className='btn btn-contact' type='button'>
                {t('contact.select.buttons.contact_us')}
              </button>
            </Link>
          </div>

          <div className='divider' />

          <div className='contact-item'>
            <Link className='btn-container' to='/contact/site-visit'>
              <button className='btn btn-contact' type='button'>
                {t('contact.select.buttons.site_visit')}
              </button>
            </Link>
          </div>

          <div className='divider' />

          <div className='contact-item'>
            <Link className='btn-container' to='/contact/join-us'>
              <button className='btn btn-contact' type='button'>
                {t('contact.select.buttons.join_us')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactSelectForm;
