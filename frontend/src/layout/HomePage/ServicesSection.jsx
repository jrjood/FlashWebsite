import Wrapper from '../../assets/wrappers/HomePageWrappers/ServicesSection';
import ServicesCard from '../../components/ServicesCard';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation('home');

  // get all keys from items and map them to translated labels
  const services = Object.keys(t('services.items', { returnObjects: true }));

  return (
    <>
      <Wrapper className='section-container'>
        <div className='container'>
          <h2 className='title title-medium'>{t('services.title')}</h2>
          <ServicesCard
            services={services /* .map((key) => t(`services.items.${key}`)) */}
          />
        </div>
      </Wrapper>
      <div className='line' />
    </>
  );
};

export default ServicesSection;
