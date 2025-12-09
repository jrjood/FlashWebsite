import styled from 'styled-components';
import aboutImage from '../../images/logoblack.png';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  /* background: radial-gradient(circle, #0e281b 0%, #000000 100%); */
  /* background-color: var(--main-green); */
  height: 100%;
  width: 100%;

  .image-box {
    margin: auto 0;
    width: 62%;
    height: 30vh;
    width: 50%;
    display: block;
    background-image: url(${aboutImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .right {
    flex: 1;
    min-width: 40%;
    color: var(--black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2rem;
    max-width: 80rem;
  }
  .text {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    /* text-shadow: 2px 2px 3px rgb(0, 0, 0); */
  }
  .highlight {
    font-size: 1.35rem;
    color: var(--primary-300);
    /* font-family: 'Rama Gothic M'; */
    margin-bottom: 2rem;
  }

  @media (max-width: 64rem) {
    /*   .image-box {
      width: 65%;
      height: 15vh;
    } */

    .right {
      padding: 1rem 1.5rem;
      max-width: 70rem;
    }

    .text {
      font-size: 0.95rem;
    }

    .highlight {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 48rem) {
    width: 100%;
    padding: 3rem 1rem;
    min-height: 80vh;

    .image-box {
      /* display: none; */
    }

    .right {
      align-items: center;
      text-align: center;
      padding: 2rem 1.5rem;
      max-width: 100%;
    }

    .title {
      /* margin-bottom: 1.5rem; */
    }

    .text {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      /* max-width: 90%; */
    }

    .highlight {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }

    .btn {
      padding: 0.75rem 2rem;
    }
  }

  @media (max-width: 36rem) {
    padding: 2rem 1rem;

    .right {
      padding: 1.5rem 1rem;
      gap: 1rem;
    }

    .title {
      /* font-size: 1.75rem; */
      margin-bottom: 1rem;
    }

    .text {
      font-size: 0.95rem;
      margin-bottom: 1rem;
      /* max-width: 95%; */
    }

    .highlight {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }

    .btn {
      padding: 0.65rem 1.5rem;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 27rem) {
    padding: 1.5rem 0.5rem;

    .right {
      padding: 1rem 0.75rem;
    }

    .title {
      /* font-size: 1.5rem; */
    }

    .image-box {
      width: 65%;
      height: 15vh;
    }

    .text {
      font-size: 0.85rem;
    }

    .highlight {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }

    .btn {
      padding: 0.6rem 1.25rem;
      font-size: 0.85rem;
    }
  }
`;

export default Wrapper;
