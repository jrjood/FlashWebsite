import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactForm';
import api from '../../api/api';

const ContactForm = () => {
  const { t, i18n } = useTranslation('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      await api.submitContact(data);
      setSubmitStatus({
        type: 'success',
        message: t('contact.form.success') || 'Message sent successfully!',
      });
      e.target.reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus({
        type: 'error',
        message:
          t('contact.form.error') ||
          'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper className='contact-section'>
      <div className='container'>
        <Link className='btn-container' to='/contact'>
          <button className='back-btn'>{t('contact.form.back')}</button>
        </Link>
        <h2 className='form-title'>{t('contact.form.title')}</h2>

        {submitStatus && (
          <div className='modal-overlay' onClick={() => setSubmitStatus(null)}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              <div className={`modal-icon ${submitStatus.type}`}>
                {submitStatus.type === 'success' ? '✓' : '✕'}
              </div>
              <h3 className='modal-title'>
                {submitStatus.type === 'success'
                  ? t('contact.form.success_title') || 'Success!'
                  : t('contact.form.error_title') || 'Error'}
              </h3>
              <p className='modal-message'>{submitStatus.message}</p>
              <button
                className='modal-close-btn'
                onClick={() => setSubmitStatus(null)}
              >
                {t('contact.form.close') || 'Close'}
              </button>
            </div>
          </div>
        )}

        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='left-fields'>
            <input
              type='text'
              name='name'
              placeholder={t('contact.form.placeholders.full_name')}
              required
              disabled={isSubmitting}
            />
            <input
              type='email'
              name='email'
              placeholder={t('contact.form.placeholders.email')}
              required
              disabled={isSubmitting}
            />
            <input
              type='tel'
              name='phone'
              placeholder={t('contact.form.placeholders.phone')}
              required
              dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
              disabled={isSubmitting}
            />
          </div>
          <div className='right-fields'>
            <textarea
              name='message'
              placeholder={t('contact.form.placeholders.message')}
              rows='15'
              disabled={isSubmitting}
            />
            <button className='btn' type='submit' disabled={isSubmitting}>
              {isSubmitting
                ? t('contact.form.sending') || 'Sending...'
                : t('contact.form.button')}
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
