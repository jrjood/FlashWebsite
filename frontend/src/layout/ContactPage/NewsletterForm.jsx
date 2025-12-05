import { useTranslation } from 'react-i18next';
import InspirationSection from '../../components/InspirationSection';
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/NewsletterForm';
import useScrollReveal from '../../hooks/useScrollReveal';
import { ScrollReveal } from '../../components/ScrollReveal';

const NewsletterForm = () => {
  const { t, i18n } = useTranslation('contact');
  const isRtl = i18n.language?.startsWith('ar');
  const { ref: newsletterRef, isVisible: newsletterVisible } = useScrollReveal({
    threshold: 0.2,
  });

  return (
    <Wrapper $rtl={isRtl} dir={isRtl ? 'rtl' : 'ltr'} ref={newsletterRef}>
      <div className='container'>
        <div className='content '>
          <div className='feature'>
            <ScrollReveal
              $isVisible={newsletterVisible}
              $animation='fadeInUp'
              $duration='0.8s'
            >
              <h2 className='newsletter-title'>{t('contact.follow_us')}</h2>
            </ScrollReveal>

            <ScrollReveal
              $isVisible={newsletterVisible}
              $animation='fadeInUp'
              $duration='0.8s'
              $delay='0.3s'
            >
              <div className='social-icons'>
                <a
                  target='_blank'
                  className='facebook'
                  href='https://www.facebook.com/profile.php?id=61575004481629'
                >
                  <FaFacebookF />
                </a>
                <a
                  target='_blank'
                  className='whatsapp'
                  href='https://api.whatsapp.com/send?phone=201027883268&text&context=Affl27NyVtxZG56bwOQldfLm6RyvztFf9SbKWtH89mSgK93Fir54a7SnEYUMEGTljWZCAHwJ77QXOtkDn6yCC-bSjFEkQFScaSZw62I1y2yBkH9oe2FDptR5VUKcLQKg-E7ehMTePtZKm4JmE7WnG21m6g&source&app=facebook'
                >
                  <FaWhatsapp />
                </a>
                <a
                  target='_blank'
                  className='instagram'
                  href='https://www.instagram.com/ignitcrew/'
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
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewsletterForm;
