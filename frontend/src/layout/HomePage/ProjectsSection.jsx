import { Link } from 'react-router-dom';
import { HomeCards } from '../../components';
import projects from '../../utils/projects';
import Wrapper from '../../assets/wrappers/CardsSection';
import { useTranslation } from 'react-i18next';
import api from '../../api/api';
import { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const params = {};

    api
      .getProjects(params)
      .then((r) => {
        setProjects(r.data.data);
        setTotal(r.data.total);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
      });
  });

  const { t } = useTranslation('home');

  return (
    <Wrapper className='section-container'>
      <div className='container'>
        <h2 className='title title-medium'>{t('projects.title')}</h2>

        <HomeCards
          cardsData={projects}
          gridRows='big-screen grid grid--2--row'
        />

        <Link className='btn-container' to='projects'>
          <button className='btn'>{t('projects.button')}</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default ProjectsSection;
