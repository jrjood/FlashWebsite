import { useTranslation } from 'react-i18next';
import Wrapper from '../assets/wrappers/InspirationSection';
import useScrollReveal from '../hooks/useScrollReveal';
import { ScrollReveal } from './ScrollReveal';

const InspirationSection = ({ children, quote }) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language?.startsWith('ar');
  const { ref: inspRef, isVisible: inspVisible } = useScrollReveal({
    threshold: 0.3,
  });

  return (
    <Wrapper $rtl={isRtl} dir={isRtl ? 'rtl' : 'ltr'} ref={inspRef}>
      <div className='container'>
        <div className='content '>
          <ScrollReveal
            $isVisible={inspVisible}
            $animation='fadeInUp'
            $duration='1s'
          >
            <div className='feature'>
              {quote && <h2 className='quote'>{quote}</h2>}
              {children}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Wrapper>
  );
};

export default InspirationSection;
