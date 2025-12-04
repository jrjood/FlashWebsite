import { useTranslation } from 'react-i18next';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { LiaHandHoldingHeartSolid } from 'react-icons/lia';
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';
import { BsStars } from 'react-icons/bs';

import Wrapper from '../../assets/wrappers/AboutPageWrappers/ValuesSection';
import { ValuesBox } from '../../components';
import useScrollReveal from '../../hooks/useScrollReveal';
import { ScrollReveal, StaggerContainer } from '../../components/ScrollReveal';

const icons = [
  <IoMdCheckmarkCircleOutline />,
  <LiaHandHoldingHeartSolid />,
  <TbArrowBigUpLinesFilled />,
  <BsStars />,
];

const ValuesSection = () => {
  const { t, i18n } = useTranslation('about');
  const items = t('values.items', { returnObjects: true });
  const isAr = i18n.language?.startsWith('ar');
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal({
    threshold: 0.15,
  });

  return (
    <Wrapper
      className='section-container'
      dir={isAr ? 'rtl' : 'ltr'}
      ref={valuesRef}
    >
      <div className='container'>
        <div className='content'>
          <ScrollReveal
            $isVisible={valuesVisible}
            $animation='fadeInUp'
            $duration='0.8s'
          >
            <h2 className='title title-big'>{t('values.title')}</h2>
          </ScrollReveal>
          <StaggerContainer
            $isVisible={valuesVisible}
            $animation='scaleIn'
            $duration='0.6s'
            $staggerDelay='0.15s'
          >
            <div className='cards-grid'>
              {Array.isArray(items) &&
                items.map((val, idx) => (
                  <ValuesBox
                    key={idx}
                    icon={icons[idx] || <IoMdCheckmarkCircleOutline />}
                    title={val.title}
                    text={val.text}
                  />
                ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </Wrapper>
  );
};

export default ValuesSection;
