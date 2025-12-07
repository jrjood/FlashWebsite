import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #050505;
  color: var(--white);
  /* text-align: left; */
  padding-bottom: 1rem;

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    position: relative;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    position: relative;
    z-index: 10;
  }

  .filters-row {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    padding: 1rem 0;
  }

  .pagination-btn {
    background: var(--primary-300);
    color: var(--black);
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
  }

  .pagination-btn:hover:not(:disabled) {
    background: var(--primary-400);
  }

  .pagination-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .page-info {
    color: var(--white);
    font-size: 0.9rem;
  }

  .title {
    color: var(--white);
  }
  .grid {
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    gap: 1.5rem;
    margin-bottom: 2rem;
    height: fit-content;
  }
  .grid--3--col {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid--2--col {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid--3--row {
    grid-template-rows: repeat(3, 1fr);
  }

  .grid--2--row {
    grid-template-rows: repeat(2, 1fr);
  }
  .card-slide {
    /* width: 100%; */
    height: 17rem;
    min-height: 17rem;
    border-radius: var(--border-radius);
    display: block;
    position: relative;
    overflow: hidden;
  }
  .small-screen {
    border-radius: var(--border-radius);
    display: none;

    .card-slide {
      height: 20rem;
      min-height: 20rem;
    }

    &:hover .overlay {
      opacity: 0.4;
      transform: scale(1.1);
    }

    &:hover .label {
      background: #050505;
      color: var(--white);
    }
    &:hover .img {
      transform: scale(1.1);
    }
    .img {
      border-radius: 3px;
      transition: var(--transition);
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .card {
    position: relative;
    overflow: hidden;
    border-radius: 3px;

    cursor: pointer;

    &:hover .overlay {
      opacity: 0.4;
      transform: scale(1.1);
    }

    &:hover .label {
      background: var(--primary-200);
      /* color: var(--white); */
    }
    &:hover .img {
      transform: scale(1.1);
    }
  }

  .big-card {
    grid-row: 1/3;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: var(--transition);
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: var(--border-radius);
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0;
    transition: var(--transition);
  }
  .label {
    position: absolute;
    bottom: 3rem;
    inset-inline-start: 0; /* replaces left: 0; works with rtl/ltr */
    width: 90%;
    height: 2.5rem;
    background: var(--primary-300);
    padding: 0.5rem 1rem;
    /* font-weight: bold; */
    color: var(--black);
    font-size: 0.85rem;
    /* fix border radius for rtl/ltr */
    border-start-start-radius: 0;
    border-end-start-radius: 0;
    border-end-end-radius: var(--border-radius);
    border-start-end-radius: var(--border-radius);
    text-transform: uppercase;
    transition: var(--transition);
  }

  .btn-container {
    /* align-self: flex-end; */
    align-self: center;
    justify-self: center;
  }
  .category-select {
    background-color: var(--white);
    width: 150px;
    padding: 5px 8px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    option {
      color: #555;
    }
  }
  @media (max-width: 62rem) {
    .label {
      font-size: 0.9rem;
    }

    .header {
      flex-direction: column;
      align-items: flex-start;
    }

    .filters-row {
      width: 100%;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 48rem) {
    .big-screen {
      /* display: none; */
    }
    .home-big-screen {
      display: none;
    }
    .small-screen {
      display: block;

      .card-slide {
        height: 22rem;
        min-height: 22rem;
      }
    }
    .label {
      width: 85%;
      font-size: 1rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 36rem) {
    .small-screen {
      .card-slide {
        height: 20rem;
        min-height: 20rem;
      }
    }
    .label {
      font-size: 0.9rem;
      height: 2.25rem;
    }
  }

  @media (max-width: 27rem) {
    .small-screen {
      .card-slide {
        height: 18rem;
        min-height: 18rem;
      }
    }
    .label {
      font-size: 0.75rem;
      height: 2rem;
      width: 90%;
    }
  }
`;

export default Wrapper;
