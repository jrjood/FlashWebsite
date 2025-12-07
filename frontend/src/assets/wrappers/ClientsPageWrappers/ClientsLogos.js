import styled from 'styled-components';

const Wrapper = styled.section`
  background: var(--primary-300);
  text-align: center;
  padding: 2rem 5rem;
  border-bottom: 0.1rem solid var(--main-green);

  .logos-grid {
    margin: 3rem auto;
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    column-gap: 8rem;
    row-gap: 2rem;
    transition: var(--transition);
    opacity: 1;
    max-width: 65rem;
    /* height: 70rem; */

    /*     display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 30px;
  justify-items: center;
  align-items: center;
  margin-bottom: 30px; */
  }

  .fade-out {
    opacity: 0;
  }

  .fade-in {
    opacity: 1;
  }
  .logos-grid img {
    height: 9.4rem;
    width: 9.4rem;
    object-fit: contain;
    transition: var(--transition);
  }

  .logos-grid img:hover {
    transform: scale(1.1);
  }

  .pagination {
    display: flex;
    justify-content: center;
    gap: 0.625rem;
  }

  .pagination span {
    padding: 0.5rem 0.75rem;
    color: var(--black);
    background: white;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }

  .pagination .active {
    background: var(--main-green-light2) !important;
  }
  .pagination span:active {
    transform: scale(0.95);
  }
  .pagination span:hover {
    background: var(--white);
  }

  @media (max-width: 52.5rem) {
    /* .logos-grid {
      grid-template-columns: repeat(3, minmax(100px, 1fr));
    } */
  }
  @media (max-width: 44rem) {
    /*  .logos-grid {
      grid-template-columns: repeat(2, minmax(100px, 1fr));
    } */
  }
  @media (max-width: 15.7rem) {
    /*     .pagination {
      gap: 0.525rem;
    }*/
    .pagination span {
      padding: 0.3rem 0.55rem;
    }
    /*  .logos-grid {
      grid-template-columns: repeat(1, minmax(100px, 1fr));
    } */
  }
`;

export default Wrapper;
