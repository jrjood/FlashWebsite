import { useState, useEffect } from 'react';

import logos from '../../assets/images/sponsorLogo';
import Wrapper from '../../assets/wrappers/ClientsPageWrappers/ClientsLogos';

const logosPerPage = 20;

const ClientLogos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(logos.length / logosPerPage);
  const [fade, setFade] = useState(false);
  const [maxVisiblePages, setMaxVisiblePages] = useState(5);

  // Resize listener to control how many page buttons are visible
  useEffect(() => {
    const updateMaxPages = () => {
      if (window.innerWidth < 480) setMaxVisiblePages(3);
      else if (window.innerWidth < 768) setMaxVisiblePages(5);
      else setMaxVisiblePages(7);
    };

    updateMaxPages();
    window.addEventListener('resize', updateMaxPages);
    return () => window.removeEventListener('resize', updateMaxPages);
  }, []);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setFade(true);
    setTimeout(() => {
      setCurrentPage(page);
      setFade(false);
    }, 300);
  };

  const displayedLogos = logos.slice(
    (currentPage - 1) * logosPerPage,
    currentPage * logosPerPage
  );

  // Logic for visible pagination range
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = startPage + maxVisiblePages - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const visiblePages = [];
  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  return (
    <Wrapper className='client-logos'>
      <div className={`logos-grid ${fade ? 'fade-out' : 'fade-in'}`}>
        {displayedLogos.map((logo, idx) => (
          <img key={idx} src={logo.src} alt={logo.alt} />
        ))}
      </div>

      <div className='pagination'>
        <span onClick={() => handlePageChange(1)}>&laquo;</span>
        <span onClick={() => handlePageChange(currentPage - 1)}>&lsaquo;</span>

        {visiblePages.map((page) => (
          <span
            key={page}
            className={page === currentPage ? 'active' : ''}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </span>
        ))}

        <span onClick={() => handlePageChange(currentPage + 1)}>&rsaquo;</span>
        <span onClick={() => handlePageChange(totalPages)}>&raquo;</span>
      </div>
    </Wrapper>
  );
};

export default ClientLogos;
