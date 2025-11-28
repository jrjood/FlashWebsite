import bgImage from '../assets/images/backgrounds/ContactPageImages/contactpage-bg.jpg'; // background image
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  PageStarter,
  ContactForm,
  JoinCrewForm,
  NewsletterForm,
  ContactSelectForm,
  SiteVisitForm,
} from '../layout/ContactPage/';

const ContactPage = () => {
  const { t } = useTranslation('contact');

  return (
    <>
      <PageStarter title={t('contact.contact_starter')} imgPath={bgImage} />
      {/* <ContactForm /> */}
      {/* <JoinCrewForm /> */}
      <Outlet />
      <NewsletterForm />
      {/* <SiteVisitForm /> */}
      {/* <ContactSelectForm /> */}
    </>
  );
};

export default ContactPage;
