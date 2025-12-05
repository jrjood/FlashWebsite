import Wrapper from '../../assets/wrappers/HomePageWrappers/ServicesSection';
import ServicesCard from '../../components/ServicesCard';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';
import { ScrollReveal } from '../../components/ScrollReveal';

const ServicesSection = () => {
  const { t } = useTranslation('home');
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollReveal({
    threshold: 0.15,
  });

  // get all keys from items and map them to translated labels
  const services = Object.keys(t('services.items', { returnObjects: true }));

  return (
    <>
      <Wrapper className='section-container' ref={servicesRef}>
        <div className='container'>
          <ScrollReveal
            $isVisible={servicesVisible}
            $animation='fadeInUp'
            $duration='0.8s'
          >
            <h2 className='title title-medium'>{t('services.title')}</h2>
          </ScrollReveal>

          <ScrollReveal
            $isVisible={servicesVisible}
            $animation='fadeInUp'
            $duration='0.8s'
            $delay='0.2s'
          >
            <ServicesCard
              services={
                services /* .map((key) => t(`services.items.${key}`)) */
              }
            />
          </ScrollReveal>
        </div>
      </Wrapper>
      <div className='line' />
    </>
  );
};

export default ServicesSection;
