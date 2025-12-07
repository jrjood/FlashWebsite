import { useTranslation } from 'react-i18next';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { LiaHandHoldingHeartSolid } from 'react-icons/lia';
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';
import { BsStars } from 'react-icons/bs';

import Wrapper from '../../assets/wrappers/AboutPageWrappers/ValuesSection';
import { ValuesBox } from '../../components';

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

  return (
    <Wrapper className='section-container' dir={isAr ? 'rtl' : 'ltr'}>
      <div className='container'>
        <div className='content'>
          <h2 className='title title-big'>{t('values.title')}</h2>
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
        </div>
      </div>
    </Wrapper>
  );
};

export default ValuesSection;
