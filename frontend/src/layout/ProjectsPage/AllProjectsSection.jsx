import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/CardsSection';
import { Cards, CheckboxFilter } from '../../components';
import api from '../../api/api';
import useScrollReveal from '../../hooks/useScrollReveal';
import { ScrollReveal } from '../../components/ScrollReveal';

const AllProjectsSection = () => {
  const { t } = useTranslation('projects');
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollReveal({
    threshold: 0.1,
  });

  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  // Filter options from API
  const [areaOptions, setAreaOptions] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]);

  // Selected filters
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  // Fetch filter options on mount
  useEffect(() => {
    api
      .getProjectFilters()
      .then((r) => {
        setAreaOptions(r.data.areas || []);
        setTypeOptions(r.data.types || []);
      })
      .catch((err) => {
        console.error('Error fetching filters:', err);
      });
  }, []);

  // Fetch projects when filters or page changes
  useEffect(() => {
    const params = { page, limit: 12 };

    // Add filters to params if selected
    if (selectedAreas.length > 0) {
      params.areas = selectedAreas.join(',');
    }
    if (selectedTypes.length > 0) {
      params.types = selectedTypes.join(',');
    }

    api
      .getProjects(params)
      .then((r) => {
        setProjects(r.data.data);
        setTotal(r.data.total);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
      });
  }, [page, selectedAreas, selectedTypes]);

  // Reset to page 1 when filters change
  useEffect(() => {
    if (page !== 1) {
      setPage(1);
    }
  }, [selectedAreas, selectedTypes]);

  return (
    <Wrapper className='section-container' ref={projectsRef}>
      <div className='container'>
        <div className='header'>
          <ScrollReveal
            $isVisible={projectsVisible}
            $animation='fadeInUp'
            $duration='0.8s'
          >
            <h2 className='title title-medium'>{t('projects.sectionTitle')}</h2>
          </ScrollReveal>

          <ScrollReveal
            $isVisible={projectsVisible}
            $animation='fadeInUp'
            $duration='0.8s'
            $delay='0.2s'
          >
            <div className='filters-row'>
              <CheckboxFilter
                title='Filter by Area'
                options={areaOptions}
                selected={selectedAreas}
                onChange={setSelectedAreas}
              />
              <CheckboxFilter
                title='Filter by Type'
                options={typeOptions}
                selected={selectedTypes}
                onChange={setSelectedTypes}
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal
          $isVisible={projectsVisible}
          $animation='fadeInUp'
          $duration='0.8s'
          $delay='0.3s'
        >
          <Cards cardsData={projects} gridRows='big-screen grid' />
        </ScrollReveal>

        {total > 12 && (
          <div className='pagination'>
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className='pagination-btn'
            >
              Previous
            </button>
            <span className='page-info'>
              Page {page} of {Math.ceil(total / 12)}
            </span>
            <button
              disabled={page >= Math.ceil(total / 12)}
              onClick={() => setPage(page + 1)}
              className='pagination-btn'
            >
              Next
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default AllProjectsSection;
