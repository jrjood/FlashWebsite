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
    align-items: start;
    /* transform: translateY(-8rem); */
    /* font-family: 'Proxima-Nova', sans-serif; */
    /* font-weight: 600; */
    font-family: 'Rubik';
  }
  .contact-item {
    display: grid;
    grid-template-rows: auto auto 1fr;
    justify-items: center;
    text-align: center;
    position: relative;
    gap: 0.3rem;
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
    font-size: 1.2rem;
    transition: all 0.1s ease-in-out;
    &:hover {
      font-size: 1.3rem;
      transform: rotate(-20deg);
    }
  }
  .label {
    /* margin: 0.5rem 0; */
    font-size: 0.85rem;
    line-height: 1.2;
  }
  .info {
    color: #ffffff8d;
    /* min-height: 8rem; */
    font-size: 0.5rem;
    text-decoration: none;
    line-height: 1.4;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    align-self: start;
    &:hover {
      color: #d2d2d2ff;
    }
  }
  .divider {
    width: 1px;
    background: var(--white);
    opacity: 0.2;
    margin: 0 1rem;
    align-self: stretch;
  }
  @media (max-width: 44rem) {
    height: 100%;
    .contact-top {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      transform: none;
      align-items: center;
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
