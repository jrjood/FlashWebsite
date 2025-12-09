import { useTranslation } from 'react-i18next';
import bgImage from '../assets/images/backgrounds/AboutPageImages/about-bg.png'; // background image
import {
  PageStarter,
  AboutSection,
  InspirationSection,
  ValuesSection,
  PropositionSection,
  SmallSection,
} from '../layout/AboutPage/';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <>
      <PageStarter title={t('about.pageTitle')} imgPath={bgImage} />
      <div
        style={{
          background: 'var(--primary-300)',
        }}
      >
        <AboutSection />
        <PropositionSection />
      </div>
      <InspirationSection />
      <ValuesSection />
      <SmallSection />
      {/* <ContactsSection /> */}
    </>
  );
};

export default AboutPage;
