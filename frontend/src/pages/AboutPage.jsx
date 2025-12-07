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
  return (
    <>
      <PageStarter title='about us' imgPath={bgImage} />
      <div
        style={{
          background: 'linear-gradient( #0f5132 0%, #0a3d24 50%, #000000 100%)',
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
