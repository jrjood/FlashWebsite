import { FaPhone, FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

import Wrapper from '../assets/wrappers/ContactsSection';

export default function ContactsSection() {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <div className='contact-top flex-center'>
        {/* Email */}
        <div className='contact-item'>
          <a
            className='contact-circle'
            target='_blank'
            rel='noopener noreferrer'
            href={`mailto:${t('contact.email')}`}
          >
            <IoMdMail />
          </a>
          <h4 className='label'>{t('contact.emailLabel')}</h4>
          <a
            className='info'
            target='_blank'
            rel='noopener noreferrer'
            href={`mailto:${t('contact.email')}`}
          >
            {t('contact.email')}
          </a>
        </div>

        <div className='divider' />

        {/* Phone */}
        <div className='contact-item'>
          <a
            className='contact-circle'
            target='_blank'
            rel='noopener noreferrer'
            href={`tel:${t('contact.phone')}`}
          >
            <FaPhone />
          </a>
          <h4 className='label'>{t('contact.callLabel')}</h4>
          <a
            className='info'
            target='_blank'
            rel='noopener noreferrer'
            href={`tel:${t('contact.phone')}`}
          >
            {t('contact.phone')}
          </a>
        </div>

        <div className='divider' />

        {/* Address */}
        <div className='contact-item'>
          <a
            className='contact-circle'
            target='_blank'
            rel='noopener noreferrer'
            href='https://maps.app.goo.gl/C5nsLsCCmiKaR37XA'
          >
            <FaLocationDot />
          </a>
          <h4 className='label'>{t('contact.visitLabel')}</h4>
          <a
            className='info'
            target='_blank'
            rel='noopener noreferrer'
            href='https://maps.app.goo.gl/C5nsLsCCmiKaR37XA'
          >
            {t('contact.address')}
          </a>
        </div>
      </div>
    </Wrapper>
  );
}
