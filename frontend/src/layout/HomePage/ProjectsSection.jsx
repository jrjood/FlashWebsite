import { Link } from 'react-router-dom';
import { HomeCards } from '../../components';
import Wrapper from '../../assets/wrappers/HomeCardsSection';
import { useTranslation } from 'react-i18next';
import api from '../../api/api';
import { useState, useEffect } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import { ScrollReveal } from '../../components/ScrollReveal';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollReveal({
    threshold: 0.15,
  });

  useEffect(() => {
    const params = {};

    api
      .getProjects(params)
      .then((r) => {
        setProjects(r.data.data);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
      });
  }, []);

  const { t } = useTranslation('home');

  return (
    <Wrapper className='section-container' ref={projectsRef}>
      <div className='container'>
        <ScrollReveal
          $isVisible={projectsVisible}
          $animation='fadeInUp'
          $duration='0.8s'
        >
          <h2 className='title title-medium'>{t('projects.title')}</h2>
        </ScrollReveal>

        <ScrollReveal
          $isVisible={projectsVisible}
          $animation='fadeInUp'
          $duration='0.8s'
          $delay='0.2s'
        >
          <HomeCards
            cardsData={projects}
            gridRows='big-screen home-big-screen grid grid--2--row grid--3--col'
          />
        </ScrollReveal>

        <ScrollReveal
          className='btn-container'
          $isVisible={projectsVisible}
          $animation='fadeInUp'
          $duration='0.8s'
          $delay='0.4s'
        >
          <Link className='btn-container' to='projects'>
            <button className='btn'>{t('projects.button')}</button>
          </Link>
        </ScrollReveal>
      </div>
    </Wrapper>
  );
};

export default ProjectsSection;
