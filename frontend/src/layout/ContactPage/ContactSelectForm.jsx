import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactSelectForm';
import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';
import { ScrollReveal } from '../../components/ScrollReveal';

const ContactSelectForm = () => {
  // use the "common" namespace
  const { t } = useTranslation('contact');
  const { ref: contactRef, isVisible: contactVisible } = useScrollReveal({
    threshold: 0.2,
  });

  return (
    <Wrapper ref={contactRef}>
      <div className='section-container'>
        <ScrollReveal
          $isVisible={contactVisible}
          $animation='fadeInUp'
          $duration='0.8s'
        >
          <h3 className='title'>{t('contact.select.title')}</h3>
        </ScrollReveal>

        <div className='contact-top flex-center'>
          <ScrollReveal
            $isVisible={contactVisible}
            $animation='fadeInUp'
            $duration='0.8s'
            $delay='0.2s'
          >
            <div className='contact-item'>
              <Link className='btn-container' to='/contact/contact-us'>
                {/* Internal navigation => no target/rel on a <button> */}
                <button className='btn btn-contact' type='button'>
                  {t('contact.select.buttons.contact_us')}
                </button>
              </Link>
            </div>
          </ScrollReveal>

          <div className='divider' />

          <ScrollReveal
            $isVisible={contactVisible}
            $animation='fadeInUp'
            $duration='0.8s'
            $delay='0.4s'
          >
            <div className='contact-item'>
              <Link className='btn-container' to='/contact/site-visit'>
                <button className='btn btn-contact' type='button'>
                  {t('contact.select.buttons.site_visit')}
                </button>
              </Link>
            </div>
          </ScrollReveal>

          <div className='divider' />

          <ScrollReveal
            $isVisible={contactVisible}
            $animation='fadeInUp'
            $duration='0.8s'
            $delay='0.6s'
          >
            <div className='contact-item'>
              <Link className='btn-container' to='/contact/join-us'>
                <button className='btn btn-contact' type='button'>
                  {t('contact.select.buttons.join_us')}
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactSelectForm;
