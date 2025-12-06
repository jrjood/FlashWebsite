// import bgImage from '../images/backgrounds/AboutPageImages/about-bg.png'; // background image

import styled from 'styled-components';

const Wrapper = styled.section`
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 5rem;
  height: fit-content;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.57)),
    url(${(props) => props.$imgPath}) no-repeat;
  background-size: cover;
  background-position: center;

  .content {
    display: flex;
    width: 100%;
    height: 30rem;
    align-content: center;
    justify-content: start;
    padding: 0 2rem;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    /* font-family: 'Rama Gothic M'; */
    font-weight: bold;
    color: var(--primary-400);
    text-transform: uppercase;
    font-size: 4rem;
    text-align: center;
    white-space: nowrap;
  }

  @media (max-width: 64rem) {
    padding: 0 3rem;

    .info {
      font-size: 3.5rem;
    }

    .content {
      height: 28rem;
      padding: 0 1.5rem;
    }
  }

  @media (max-width: 48rem) {
    padding: 0 2rem;

    .info {
      font-size: 3rem;
    }

    .content {
      justify-content: center;
      height: 25rem;
      padding: 0 1rem;
    }
  }

  @media (max-width: 44rem) {
    padding: 0 1.5rem;

    .info {
      font-size: 2.5rem;
    }

    .content {
      height: 22rem;
    }
  }

  @media (max-width: 36rem) {
    padding: 0 1rem;

    .info {
      font-size: 2rem;
    }

    .content {
      height: 20rem;
      padding: 0 0.5rem;
    }
  }

  @media (max-width: 27rem) {
    padding: 0 0.5rem;

    .info {
      /* font-size: 2.5rem; */
    }

    .content {
      height: 18rem;
    }
  }
`;

export default Wrapper;
