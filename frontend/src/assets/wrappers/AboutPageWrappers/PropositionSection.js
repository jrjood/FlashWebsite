import styled from 'styled-components';

const Wrapper = styled.section`
  /* background: radial-gradient(circle, #0e281b 0%, #000000 100%); */
  /* background-color: var(--main-green); */

  position: relative;
  color: var(--white);
  width: 100%;
  height: fit-content;
  border-bottom: 0.1rem solid var(--main-green);

  .content {
    display: flex;
    justify-content: space-around;
  }
  .cards-grid {
    /* display: grid; */
    /* grid-template-columns: repeat(2, 1fr); */
    /* justify-content: center; */
    /* justify-items: center; */
    /* align-content: center; */
    /* column-gap: 1.5rem; */
    /* row-gap: 1rem; */
    /* width: 100%; */
    display: flex;
  }
  .img-box {
    position: relative;
    border: 0.3rem solid var(--primary-300);

    width: fit-content;
    height: fit-content;
    display: flex;
    overflow: hidden;

    &:hover {
      .owner-name,
      .owner-title {
        opacity: 0;
      }
      .separator {
        position: absolute;
        top: -45%;
        width: 70%;
      }

      .card-text {
        position: absolute;
        top: 0%;
        opacity: 1;
        line-height: 1.2;
      }

      .owner-bio {
        opacity: 1;
        top: 10%;
      }

      .owner-img {
        transform: scale(1);
      }

      .overlay {
        opacity: 1;
      }
    }
  }
  .overlay {
    position: absolute;
    inset: 0;
    opacity: 0.85;
    transition: all 0.3s ease-in-out;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0%,
      /* Very dark at bottom */ rgba(0, 0, 0, 1) 15%,
      /* Still dark */ rgba(0, 0, 0, 0.75) 30%,
      /* Start fading fast */ rgba(0, 0, 0, 0.1) 55% /* Fully transparent */
    );
  }

  .owner-img {
    height: 52vh;
    transition: all 0.5s ease-in-out;
    transform: scale(1.06);
  }

  .img-text {
    position: absolute;
    top: 80%;

    /* left: 3%; */
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0 1rem;
  }
  .owner-title {
    font-size: 2.5rem;
    font-size: 1.1rem;
    transition: all 0.35s ease-in-out;
  }

  .owner-name {
    /* line-height: 1.3; */
    /* opacity: 0; */
    transition: all 0.4s ease-in-out;
    font-weight: 600;
    font-size: 1.35rem;
  }
  .owner-bio {
    position: absolute;
    opacity: 0;
    font-size: 1rem;
    top: 150%;
    transition: all 0.35s ease-in-out;
  }
  .separator {
    top: 90%;
    /* left: 3%; */
    margin: 15px 0;
    width: 40%;
    height: 5px;
    background-color: var(--primary-400);
    position: absolute;
    transition: all 0.35s ease-in-out;
  }

  @media (max-width: 62rem) {
  }
  @media (max-width: 48rem) {
    .cards-grid {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 36rem) {
    .card-title {
      font-size: 1.8rem;
    }
  }
`;

export default Wrapper;
