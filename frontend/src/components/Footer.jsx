import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import { ContactsSection, Logo } from '../components';
import Wrapper from '../assets/wrappers/Footer';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <Wrapper dir='ltr'>
      <Logo />
      <ContactsSection />
      <div className='social-container'>
        <div className='social-icons'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='facebook'
            href='https://www.facebook.com/p/Flash-investment-61559102775358/'
          >
            <FaFacebookF />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='whatsapp'
            href='https://api.whatsapp.com/send?phone=%2B201118883882'
          >
            <FaWhatsapp />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='instagram'
            href='https://www.instagram.com/flash.investment/'
          >
            <FaInstagram />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='linkedin'
            href='https://www.linkedin.com/company/108218609/admin/dashboard/'
          >
            <FaLinkedin />
          </a>
        </div>

        <div
          style={{
            fontFamily: isArabic
              ? 'EB Garamond, serif'
              : 'Proxima-Nova, sans-serif',
          }}
          className='copy-text'
        >
          <div className='developed-by'>
            <p className='copyrights'>{t('footer.rights')}</p>

            <p dir='rtl'>
              {t('footer.developed')}

              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://portfolio-webpage-jrd.vercel.app/'
                className='designer-link'
              >
                JORDI
              </a>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
