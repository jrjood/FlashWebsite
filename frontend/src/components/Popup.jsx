import { useEffect, useRef } from 'react';
import Wrapper from '../assets/wrappers/Popup';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Popup = ({ onClose, data }) => {
  const { t } = useTranslation('home');

  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <Wrapper $background={data.image}>
      <div className='popup-container' ref={popupRef}>
        <button className='closeBtn' onClick={onClose}>
          &times;
        </button>
        <h2 className='title'>{t(data.title).replace(/_/g, ' ')}</h2>

        <div className='scrollContainer'>
          <div className='popup-card'>
            {/* <img className='img' src={data.image} alt={data.text} /> */}
            {/* <div className='overlay' /> */}
            {/* <div className='label'> {data.text}</div> */}
            <p>{t(data.text)}</p>
          </div>
        </div>
        <div className='btn-container'>
          <Link to='projects'>
            <button className='btn popup-btn'>
              {t('services.popup_button')}
            </button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Popup;
