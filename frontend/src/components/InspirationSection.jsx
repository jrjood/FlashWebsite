import { useTranslation } from 'react-i18next';
import Wrapper from '../assets/wrappers/InspirationSection';

const InspirationSection = ({ children, quote }) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language?.startsWith('ar');
  return (
    <Wrapper $rtl={isRtl} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className='container'>
        <div className='content '>
          <div className='feature'>
            {quote && <h2 className='quote'>{quote}</h2>}
            {children}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default InspirationSection;
