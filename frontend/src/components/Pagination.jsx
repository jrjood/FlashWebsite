import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: ${(props) => (props.$variant === 'light' ? '3rem' : '2rem')};
  padding: 1rem 0;

  .pagination-btn {
    padding: ${(props) =>
      props.$variant === 'light' || props.$variant === 'dark-bg'
        ? '0.75rem 1.5rem'
        : '0.5rem 1.5rem'};
    background: ${(props) => {
      if (props.$variant === 'light') return 'white';
      if (props.$variant === 'dark-bg') return 'grey';
      return 'var(--primary-300)';
    }};
    color: ${(props) => {
      if (props.$variant === 'light') return '#0f5132';
      if (props.$variant === 'dark-bg') return 'white';
      return 'var(--black)';
    }};
    border: ${(props) => {
      if (props.$variant === 'light') return '2px solid #0f5132';
      if (props.$variant === 'dark-bg') return '2px solid white';
      return 'none';
    }};
    border-radius: ${(props) =>
      props.$variant === 'light' || props.$variant === 'dark-bg'
        ? '8px'
        : 'var(--border-radius)'};
    cursor: pointer;
    font-weight: 600;
    transition: all 0.2s;

    &:hover:not(:disabled) {
      background: ${(props) => {
        if (props.$variant === 'light') return '#0f5132';
        if (props.$variant === 'dark-bg') return 'white';
        return 'var(--primary-400)';
      }};
      color: ${(props) => {
        if (props.$variant === 'light') return 'white';
        if (props.$variant === 'dark-bg') return '#0f5132';
        return 'var(--black)';
      }};
      transform: ${(props) =>
        props.$variant === 'light' || props.$variant === 'dark-bg'
          ? 'translateY(-2px)'
          : 'none'};
      box-shadow: ${(props) => {
        if (props.$variant === 'light')
          return '0 4px 12px rgba(15, 81, 50, 0.3)';
        if (props.$variant === 'dark-bg')
          return '0 4px 12px rgba(255, 255, 255, 0.2)';
        return 'none';
      }};
    }

    &:disabled {
      opacity: ${(props) =>
        props.$variant === 'light' || props.$variant === 'dark-bg'
          ? '0.4'
          : '0.5'};
      cursor: not-allowed;
    }
  }

  .page-info {
    color: ${(props) => {
      if (props.$variant === 'light') return '#2d3748';
      if (props.$variant === 'dark-bg') return 'white';
      return 'var(--white)';
    }};
    font-size: ${(props) =>
      props.$variant === 'light' || props.$variant === 'dark-bg'
        ? '1rem'
        : '0.9rem'};
    font-weight: 600;
  }
`;

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  variant = 'dark',
}) => {
  if (totalPages <= 1) return null;

  return (
    <PaginationWrapper $variant={variant}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className='pagination-btn'
      >
        Previous
      </button>
      <span className='page-info'>
        Page {currentPage} of {totalPages}
      </span>
      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className='pagination-btn'
      >
        Next
      </button>
    </PaginationWrapper>
  );
};

export default Pagination;
