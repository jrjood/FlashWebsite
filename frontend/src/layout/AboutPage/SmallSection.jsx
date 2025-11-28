import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: var(--primary-300);
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 6rem;
  h3 {
    color: var(--black);
    font-weight: 700;
    font-size: 3.2rem;
    text-transform: uppercase;
    text-align: center;
  }
  @media (max-width: 36rem) {
    padding: 6rem 6rem;
    h3 {
      font-size: 2rem;
    }
  }
`;

const SmallSection = () => {
  const { t, i18n } = useTranslation('about');
  const isAr = i18n.language?.startsWith('ar');

  return (
    <Wrapper dir={isAr ? 'rtl' : 'ltr'}>
      <h3>{t('small.text')}</h3>
    </Wrapper>
  );
};

export default SmallSection;
