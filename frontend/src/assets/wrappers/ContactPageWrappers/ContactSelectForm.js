import styled from 'styled-components';

const Wrapper = styled.section`
  color: var(--black);
  /* height: 15rem; */
  padding: 0 2rem;
  padding-top: 4rem;
  /* height: fit-content; */
  /* padding: 4rem 4rem 2rem; */

  .contact-top {
    display: grid;
    grid-template-columns: 1fr 0.1fr 1fr 0.1fr 1fr;
    /* transform: translateY(-8rem); */
    /* font-family: 'Proxima-Nova', sans-serif; */
    font-weight: 600;
    padding: 2rem 0;
  }

  .btn-container {
    width: 80%;
  }
  .title {
    font-size: 2rem;
    margin-bottom: 0;
  }
  .btn-contact {
    width: 100%;
    height: 6rem;
    font-size: 1.5rem;
  }

  .contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  }

  .divider {
    width: 1px;
    height: 5rem;
    background: var(--black);
    opacity: 0.2;
    margin: 0 1rem;
  }

  @media (max-width: 64rem) {
    .btn-container {
      width: 90%;
    }

    .btn-contact {
      font-size: 1.25rem;
      height: 5.5rem;
    }
  }

  @media (max-width: 48rem) {
    padding: 3rem 1.5rem;

    .title {
      font-size: 1.75rem;
      text-align: center;
    }
    .section-container {
      padding: 0;
    }

    .contact-top {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .divider {
      display: none;
    }

    .btn-container {
      width: 100%;
    }

    .btn-contact {
      font-size: 1.125rem;
      height: 5rem;
    }
  }

  @media (max-width: 30rem) {
    padding: 2rem 1rem;

    .title {
      font-size: 1.5rem;
    }

    .btn-contact {
      font-size: 1rem;
      height: 4.5rem;
    }
  }
`;

export default Wrapper;
