import bgImage from '../assets/images/backgrounds/ClientsPageImages/clientspage-bg.jpg';
import { PageStarter, ClientLogos } from '../layout/ClientsPage/';
import { useTranslation } from 'react-i18next';

const ClientsPage = () => {
  const { t } = useTranslation('clients');

  return (
    <>
      <PageStarter title={t('clients.pageTitle')} imgPath={bgImage} />
      <ClientLogos />
      {/* <InspirationSection quote={t('clients.inspirationQuote')} /> */}
      {/* <ContactsSection /> */}
    </>
  );
};

export default ClientsPage;
