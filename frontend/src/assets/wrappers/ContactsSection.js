import styled from 'styled-components';

const Wrapper = styled.section`
  /* background: var(--main-green); */
  color: var(--white);
  /* height: 15rem; */
  padding: 2rem;
  /* height: fit-content; */
  /* padding: 4rem 4rem 2rem; */

  .contact-top {
    display: grid;
    grid-template-columns: 1fr 0.1fr 1fr 0.1fr 1fr;
    /* transform: translateY(-8rem); */
    /* font-family: 'Proxima-Nova', sans-serif; */
    font-weight: 600;
  }
  .contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  }
  .contact-circle {
    width: 3rem;
    height: 3rem;
    background: var(--primary-300);
    border-radius: 50%;
    display: flex;
    color: var(--main-green);
    align-items: center;
    justify-content: center;
    margin-bottom: 0.7rem;
    font-size: 1.2rem;
    transition: all 0.1s ease-in-out;
    &:hover {
      font-size: 1.3rem;
      transform: rotate(-20deg);
    }
  }
  .label {
    /* margin: 0.5rem 0; */
    font-size: 1rem;
  }
  .info {
    color: #ffffff8d;
    /* min-height: 8rem; */
    font-size: 0.8rem;
    text-decoration: none;
    &:hover {
      color: #d2d2d2ff;
    }
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
