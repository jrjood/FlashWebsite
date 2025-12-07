import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/AboutPageWrappers/PropositionSection';
import owner_image from '../../assets/images/backgrounds/AboutPageImages/owner.jpg';
import { Founders } from '../../components';
import useScrollReveal from '../../hooks/useScrollReveal';
import { ScrollReveal } from '../../components/ScrollReveal';

const PropositionSection = () => {
  const { t } = useTranslation('about');
  const { ref: propRef, isVisible: propVisible } = useScrollReveal({
    threshold: 0.15,
  });

  return (
    <Wrapper className='section-container' ref={propRef}>
      <div className='container'>
        <ScrollReveal
          $isVisible={propVisible}
          $animation='fadeInUp'
          $duration='0.8s'
        >
          <h2 className='title title-medium'>{t('proposition.title')}</h2>
        </ScrollReveal>
        <div className='content'>
          <ScrollReveal
            $isVisible={propVisible}
            $animation='fadeInLeft'
            $duration='0.8s'
            $delay='0.2s'
          >
            <Founders
              owner_image={owner_image}
              ownerName={t('proposition.founder1_name')}
              ownerTitle={t('proposition.founder1_title')}
              ownerBio={t('proposition.founder1_bio')}
            />
          </ScrollReveal>

          <ScrollReveal
            $isVisible={propVisible}
            $animation='fadeInRight'
            $duration='0.8s'
            $delay='0.3s'
          >
            <Founders
              owner_image={owner_image}
              ownerName={t('proposition.founder2_name')}
              ownerTitle={t('proposition.founder2_title')}
              ownerBio={t('proposition.founder2_bio')}
            />
          </ScrollReveal>
        </div>
      </div>
    </Wrapper>
  );
};

export default PropositionSection;
