import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '../../assets/wrappers/CardsSection';
import { Cards, CheckboxFilter } from '../../components';
import api from '../../api/api';
import useScrollReveal from '../../hooks/useScrollReveal';
import { ScrollReveal } from '../../components/ScrollReveal';

const AllProjectsSection = () => {
  const { t } = useTranslation('projects');
  const { t: t2 } = useTranslation('common');
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollReveal({
    threshold: 0.1,
  });

  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

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
    const params = { page, limit: 9 };

    // Add filters to params if selected
    if (selectedAreas.length > 0) {
      params.areas = selectedAreas.join(',');
    }
    if (selectedTypes.length > 0) {
      params.types = selectedTypes.join(',');
    }

    setLoading(true);
    api
      .getProjects(params)
      .then((r) => {
        // console.log('API Response - Page', page, ':', {
        //   returnedItems: r.data.data.length,
        //   apiTotal: r.data.total,
        //   currentProjectsLength: projects.length,
        // });
        if (page === 1) {
          setProjects(r.data.data);
          setTotal(r.data.total);
        } else {
          setProjects((prev) => {
            const newList = [...prev, ...r.data.data];
            console.log('After append:', {
              newListLength: newList.length,
              willSetTotal:
                r.data.data.length === 0 ? newList.length : r.data.total,
            });
            return newList;
          });
          // If we got 0 items, there's nothing more to load
          if (r.data.data.length === 0) {
            console.log('Got 0 items, setting total to projects.length');
            setTotal(projects.length); // Set total to current length to hide button
          } else {
            setTotal(r.data.total);
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
        setLoading(false);
      });
  }, [page, selectedAreas, selectedTypes]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAreas, selectedTypes]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const hasMore = projects.length < total;

  return (
    <Wrapper className='section-container ' ref={projectsRef}>
      <div className='container '>
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

        {hasMore && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem',
              padding: '0 1rem',
            }}
          >
            <button
              onClick={handleLoadMore}
              disabled={loading}
              style={{
                padding: '0.75rem 2rem',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                opacity: loading ? 0.6 : 1,
                minWidth: '150px',
                width: 'auto',
                maxWidth: '100%',
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.background = 'transparent';
                  // e.target.style.color = '#0f5132';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow =
                    '0 4px 12px rgba(255, 255, 255, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                // e.target.style.background = '#0f5132';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {loading ? t2('buttons.loading') : t2('buttons.showMore')}
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default AllProjectsSection;
