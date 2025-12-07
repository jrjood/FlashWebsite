import { useState } from 'react';
import { Pagination } from '../../components';
import logos from '../../assets/images/sponsorLogo';
import Wrapper from '../../assets/wrappers/ClientsPageWrappers/ClientsLogos';

const logosPerPage = 20;

const ClientLogos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(logos.length / logosPerPage);
  const [fade, setFade] = useState(false);

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

  return (
    <Wrapper className='client-logos'>
      <div className={`logos-grid ${fade ? 'fade-out' : 'fade-in'}`}>
        {displayedLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            loading='lazy'
            decoding='async'
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        variant='light'
      />
    </Wrapper>
  );
};

export default ClientLogos;
