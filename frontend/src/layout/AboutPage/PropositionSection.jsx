import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/AboutPageWrappers/PropositionSection';
import owner_image from '../../assets/images/backgrounds/AboutPageImages/owner.png';
import { Founders } from '../../components';

const PropositionSection = () => {
  const { t } = useTranslation('about');

  return (
    <Wrapper className='section-container'>
      <div className='container'>
        <h2 className='title title-big'>{t('proposition.title')}</h2>
        <div className='content'>
          <Founders
            owner_image={owner_image}
            ownerName={t('proposition.founder1_name')}
            ownerTitle={t('proposition.founder1_title')}
            ownerBio={t('proposition.founder1_bio')}
          />

          <Founders
            owner_image={owner_image}
            ownerName={t('proposition.founder2_name')}
            ownerTitle={t('proposition.founder2_title')}
            ownerBio={t('proposition.founder2_bio')}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default PropositionSection;
