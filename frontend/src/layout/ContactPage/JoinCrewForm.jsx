import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/ContactPageWrappers/ContactForm';
import { Link } from 'react-router-dom';

const JoinCrewForm = () => {
  const { t, i18n } = useTranslation('contact');
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [dragOver, setDragOver] = useState(false);

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

  return (
    <Wrapper className='contact-section'>
      <div className='container'>
        <Link className='btn-container' to='/contact'>
          <button className='back-btn'>{t('contact.join_crew.back')}</button>
        </Link>
        <h2 className='form-title'>{t('contact.join_crew.title')}</h2>

        <form
          className='contact-form'
          action='https://api.web3forms.com/submit'
          method='POST'
          encType='multipart/form-data'
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
              placeholder={t('contact.join_crew.placeholders.full_name')}
              required
            />
            <input
              type='email'
              name='email'
              placeholder={t('contact.join_crew.placeholders.email')}
              required
            />
            <input
              type='tel'
              name='phone'
              placeholder={t('contact.join_crew.placeholders.phone')}
              required
              dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
            />
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
                >
                  {t('join_crew.upload.remove')}
                </button>
              </div>
            )}

            <button className='btn' type='submit'>
              {t('contact.join_crew.button')}
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default JoinCrewForm;
