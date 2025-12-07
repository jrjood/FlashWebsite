import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactForm';
import { Link } from 'react-router-dom';
import api from '../../api/api';

const JoinCrewForm = () => {
  const { t, i18n } = useTranslation('contact');
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onFilePick = (e) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };
  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(true);
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    const dt = new DataTransfer();
    dt.items.add(file);
    if (inputRef.current) {
      inputRef.current.files = dt.files;
    }
    setFileName(file.name);
  };

  const clearFile = () => {
    if (inputRef.current) inputRef.current.value = null;
    setFileName('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);

    // Rename fields to match backend expectations
    const submitData = new FormData();
    submitData.append('name', formData.get('name'));
    submitData.append('email', formData.get('email'));
    submitData.append('phone', formData.get('phone'));
    submitData.append('position', formData.get('position'));

    // Add CV file if exists
    const cvFile = formData.get('cv');
    if (cvFile && cvFile.size > 0) {
      submitData.append('cv', cvFile);
    }

    try {
      await api.submitCareerApplication(submitData);
      setSubmitStatus({
        type: 'success',
        message:
          t('contact.join_crew.success') ||
          'Application submitted successfully!',
      });
      e.target.reset();
      setFileName('');
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting career application:', error);
      setSubmitStatus({
        type: 'error',
        message:
          t('contact.join_crew.error') ||
          'Failed to submit application. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper className='contact-section'>
      <div className='container'>
        <Link className='btn-container' to='/contact'>
          <button className='back-btn'>{t('contact.join_crew.back')}</button>
        </Link>
        <h2 className='form-title'>{t('contact.join_crew.title')}</h2>

        {submitStatus && (
          <div className='modal-overlay' onClick={() => setSubmitStatus(null)}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              <div className={`modal-icon ${submitStatus.type}`}>
                {submitStatus.type === 'success' ? '✓' : '✕'}
              </div>
              <h3 className='modal-title'>
                {submitStatus.type === 'success'
                  ? t('contact.join_crew.success_title') || 'Success!'
                  : t('contact.join_crew.error_title') || 'Error'}
              </h3>
              <p className='modal-message'>{submitStatus.message}</p>
              <button
                className='modal-close-btn'
                onClick={() => setSubmitStatus(null)}
              >
                {t('contact.join_crew.close') || 'Close'}
              </button>
            </div>
          </div>
        )}

        <form
          className='contact-form'
          onSubmit={handleSubmit}
          encType='multipart/form-data'
        >
          <div className='left-fields'>
            <input
              type='text'
              name='name'
              placeholder={t('contact.join_crew.placeholders.full_name')}
              required
              disabled={isSubmitting}
            />
            <input
              type='email'
              name='email'
              placeholder={t('contact.join_crew.placeholders.email')}
              required
              disabled={isSubmitting}
            />
            <input
              type='tel'
              name='phone'
              placeholder={t('contact.join_crew.placeholders.phone')}
              required
              dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
              disabled={isSubmitting}
            />
            <select
              name='position'
              required
              disabled={isSubmitting}
              style={{
                padding: '1rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                width: '100%',
                color: '#2d3748',
              }}
            >
              <option value='' disabled selected style={{ color: '#a0aec0' }}>
                {t('contact.join_crew.placeholders.position') ||
                  'Select Position'}
              </option>
              <option value='Sales'>Sales</option>
              <option value='Operations'>Operations</option>
              <option value='Accounting'>Accounting</option>
              <option value='IT'>IT</option>
              <option value='Marketing'>Marketing</option>
              <option value='HR'>HR</option>
            </select>
          </div>

          <div className='right-fields'>
            <label
              htmlFor='cvUpload'
              className={`file-upload-box ${dragOver ? 'drag-over' : ''}`}
              onDragEnter={onDragEnter}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            >
              <input
                ref={inputRef}
                id='cvUpload'
                name='cv'
                type='file'
                accept='.pdf,.doc,.docx'
                onChange={onFilePick}
                aria-label={t('contact.join_crew.upload.choose_or_drag')}
                disabled={isSubmitting}
              />
              <span className='file-upload-text'>
                {fileName
                  ? t('contact.join_crew.upload.file_selected')
                  : t('contact.join_crew.upload.choose_or_drag')}
              </span>
            </label>

            {fileName && (
              <div className='file-meta'>
                <span className='file-name'>{fileName}</span>
                <button
                  type='button'
                  className='file-remove'
                  onClick={clearFile}
                  disabled={isSubmitting}
                >
                  {t('contact.join_crew.upload.remove') || 'Remove'}
                </button>
              </div>
            )}

            <button
              className='btn'
              type='submit'
              disabled={isSubmitting}
              style={{ marginTop: '1rem' }}
            >
              {isSubmitting
                ? t('contact.join_crew.sending') || 'Sending...'
                : t('contact.join_crew.button')}
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default JoinCrewForm;
