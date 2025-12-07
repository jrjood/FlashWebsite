import bgImage from '../assets/images/backgrounds/ProjectsPageImages/projects-bg.jpg';
import {
  PageStarter,
  AllProjectsSection,
  InspirationSection,
} from '../layout/ProjectsPage/';
import { useTranslation } from 'react-i18next';

const ProjectsPage = () => {
  const { t } = useTranslation('projects');

  return (
    <>
      <PageStarter title={t('projects.pageTitle')} imgPath={bgImage} />
      <AllProjectsSection />
      <InspirationSection quote={t('projects.inspirationQuote')} />
    </>
  );
};

export default ProjectsPage;
