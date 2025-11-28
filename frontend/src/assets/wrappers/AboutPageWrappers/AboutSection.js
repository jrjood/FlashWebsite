import styled from 'styled-components';
import aboutImage from '../../images/backgrounds/AboutPageImages/logo2.png';

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
    /* width: 42%; */
    height: 40vh;
    width: 50%;
    display: block;
    background-image: url(${aboutImage});
    background-size: cover;
    background-position: center;
  }
  .right {
    flex: 1;
    min-width: 40%;
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2rem;
    max-width: 80rem;
  }
  .text {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 3px rgb(0, 0, 0);
  }
  .highlight {
    font-size: 1.7rem;
    color: var(--primary-300);
    /* font-family: 'Rama Gothic M'; */
    margin-bottom: 2.5rem;
  }
  @media (max-width: 48rem) {
    background: linear-gradient(rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.66)),
      url(${aboutImage});
    background-size: cover;
    background-position: center;
    /* height: 100vh; */
    width: 100%;
    padding: 2rem 0;

    .image-box {
      display: none;
    }
    .right {
      align-items: center;
      text-align: center;
    }
    .text {
      margin-bottom: 1rem;
      /* max-width: 95%; */
      font-size: 1.4rem;
    }
    /*  .highlight {
      margin-bottom: 2.5rem;
    } */
  }
  @media (max-width: 44rem) {
    .text {
      font-size: 1.2rem;
    }
    .right {
      gap: 1rem;
    }
  }
  @media (max-width: 36rem) {
    .text {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    .highlight {
      margin-bottom: 0.5rem;
      font-size: 1.6rem;
    }
  }
  @media (max-width: 27rem) {
    .highlight {
      font-size: 1.3rem;
    }
  }
`;

export default Wrapper;
