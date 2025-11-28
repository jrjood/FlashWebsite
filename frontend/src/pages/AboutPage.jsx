import bgImage from '../assets/images/backgrounds/AboutPageImages/about-bg.png'; // background image
import {
  PageStarter,
  AboutSection,
  InspirationSection,
  ValuesSection,
  PropositionSection,
  SmallSection,
  ContactsSection,
} from '../layout/AboutPage/';

const AboutPage = () => {
  return (
    <>
      <PageStarter title='about us' imgPath={bgImage} />
      <div
        style={{
          background: 'linear-gradient(135deg, #0f5132 0%, #1a7f4f 100%)',
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
