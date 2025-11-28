import styled from 'styled-components';

const Wrapper = styled.section`
  background: linear-gradient(135deg, #0f5132 0%, #0a3d24 50%, #000000 100%);
  color: var(--white);
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
    background: var(--white);
    opacity: 0.2;
    margin: 0 1rem;
  }

  @media (max-width: 44rem) {
    height: 100%;
    .contact-top {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      transform: none;
    }

    .divider {
      display: none;
    }
    .contact-circle {
      width: 5rem;
      height: 5rem;
      font-size: 1.8rem;
    }
  }
`;

export default Wrapper;
