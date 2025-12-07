import bgImage from '../assets/images/backgrounds/ContactPageImages/contactpage-bg.jpg'; // background image
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { PageStarter, NewsletterForm } from '../layout/ContactPage/';

const ContactPage = () => {
  const { t } = useTranslation('contact');

  return (
    <>
      <PageStarter title={t('contact.contact_starter')} imgPath={bgImage} />
      {/* <ContactForm /> */}
      {/* <JoinCrewForm /> */}
      <div
        style={{
          background:
            'linear-gradient(360deg, #ffffffff 0%, #faf8ef 50%, #f7f4d3ff 100%)',
        }}
      >
        <Outlet />
        <NewsletterForm />
      </div>
      {/* <SiteVisitForm /> */}
      {/* <ContactSelectForm /> */}
    </>
  );
};

export default ContactPage;
