import { Counter } from '../../components';
import logo2001 from '../../assets/images/logo-2001.png';
import Wrapper from '../../assets/wrappers/HomePageWrappers/MilestonesSection';
import { useTranslation } from 'react-i18next';

const MilestonesSection = () => {
  const { t } = useTranslation('home');

  return (
    <Wrapper className='flex-center'>
      <div className='container flex-center'>
        <div className='stats-container'>
          <p className='top-text'>{t('milestones.topText')}</p>

          <div className='stats flex-center'>
            <div className='stat-block'>
              {t('milestones.clients')}
              <span>
                <Counter start='0' end='100' duration={7} />{' '}
                {t('milestones.plus')}
              </span>
            </div>

            <div className='stat-block'>
              {t('milestones.projects')}
              <span>
                <Counter start='0' end='200' duration={7} />{' '}
                {t('milestones.plus')}
              </span>
            </div>
          </div>

          {/* <div className='small-screen'>
            <span className='small-since'>{t('milestones.sinceSmall')}</span>
            <span className='small-date'>{t('milestones.sinceYear')}</span>
          </div> */}
        </div>

        <div className='logo-container'>
          {/* <h2 className='since'>{t('milestones.since')}</h2> */}
          <img src={logo2001} alt={t('milestones.sinceYear')} />
        </div>
      </div>
    </Wrapper>
  );
};

export default MilestonesSection;
