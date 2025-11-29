import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactForm';
import { Link } from 'react-router-dom';
import api from '../../api/api';

const SiteVisitForm = () => {
  const { t, i18n } = useTranslation('contact');
  const dateRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const openPicker = () => {
    if (dateRef.current?.showPicker) dateRef.current.showPicker();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      preferredDate: formData.get('date'),
      timeSlot: formData.get('timeSlot'),
    };

    try {
      await api.submitSiteVisit(data);
      setSubmitStatus({
        type: 'success',
        message:
          t('contact.site_visit.success') ||
          'Site visit request submitted successfully!',
      });
      e.target.reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting site visit:', error);
      setSubmitStatus({
        type: 'error',
        message:
          t('contact.site_visit.error') ||
          'Failed to submit request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper className='contact-section'>
      <div className='container'>
        <Link className='btn-container' to='/contact'>
          <button className='back-btn'>{t('contact.site_visit.back')}</button>
        </Link>
        <h2 className='form-title'>{t('contact.site_visit.title')}</h2>

        {submitStatus && (
          <div className='modal-overlay' onClick={() => setSubmitStatus(null)}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              <div className={`modal-icon ${submitStatus.type}`}>
                {submitStatus.type === 'success' ? '✓' : '✕'}
              </div>
              <h3 className='modal-title'>
                {submitStatus.type === 'success'
                  ? t('contact.site_visit.success_title') || 'Success!'
                  : t('contact.site_visit.error_title') || 'Error'}
              </h3>
              <p className='modal-message'>{submitStatus.message}</p>
              <button
                className='modal-close-btn'
                onClick={() => setSubmitStatus(null)}
              >
                {t('contact.site_visit.close') || 'Close'}
              </button>
            </div>
          </div>
        )}

        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='left-fields'>
            <input
              type='text'
              name='name'
              placeholder={t('contact.site_visit.placeholders.full_name')}
              required
              disabled={isSubmitting}
            />
            <input
              type='email'
              name='email'
              placeholder={t('contact.site_visit.placeholders.email')}
              required
              disabled={isSubmitting}
            />
            <input
              type='tel'
              name='phone'
              placeholder={t('contact.site_visit.placeholders.phone')}
              required
              dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
              disabled={isSubmitting}
            />
          </div>

          <div className='right-fields'>
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
              disabled={isSubmitting}
              style={{ marginBottom: '1rem' }}
            />

            <select
              name='timeSlot'
              required
              disabled={isSubmitting}
              style={{
                padding: '1rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                marginBottom: '1rem',
                width: '100%',
                color: '#2d3748',
              }}
            >
              <option value='' disabled selected style={{ color: '#a0aec0' }}>
                {t('contact.site_visit.placeholders.time_slot') ||
                  'Select Time Slot'}
              </option>
              <option value='Morning (9 AM - 12 PM)'>
                Morning (9 AM - 12 PM)
              </option>
              <option value='Afternoon (12 PM - 3 PM)'>
                Afternoon (12 PM - 3 PM)
              </option>
              <option value='Evening (3 PM - 6 PM)'>
                Evening (3 PM - 6 PM)
              </option>
            </select>

            <button className='btn' type='submit' disabled={isSubmitting}>
              {isSubmitting
                ? t('contact.site_visit.sending') || 'Sending...'
                : t('contact.site_visit.button')}
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default SiteVisitForm;
