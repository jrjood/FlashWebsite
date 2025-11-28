import styled from 'styled-components';
import aboutImage from '../../../assets/images/backgrounds/HomePageImages/about-bg.jpg';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0f5132 0%, #0a3d24 50%, #000000 100%);
  gap: 2rem;
  /* height: 100vh; */
  width: 100%;
  .logo {
    display: flex;
    align-items: center;
    width: 70%;
    max-width: 40rem;
    padding-bottom: 2rem;
  }

  .image-box {
    margin: auto 0;
    height: 45rem;
    width: 50%;
    display: block;
    background-image: url(${aboutImage});
    background-size: cover;
    background-position: center;
    margin: 3rem 0;
  }
  .right {
    flex: 1;
    min-width: 40%;
    padding: 2rem;
    padding-left: 1rem;
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .text {
    font-size: 1.325rem;
    line-height: 1.5;
    margin-bottom: 2rem;
    max-width: 90rem;
    text-shadow: 2px 2px 3px rgb(0, 0, 0);
  }
  .highlight {
    font-size: 1.7rem;
    color: var(--primary-300);
    /* font-family: 'Rama Gothic M'; */
    margin-bottom: 2.5rem;
  }
  @media (max-width: 48rem) {
    height: 100%;

    background-image: linear-gradient(
        to right bottom,
        rgba(17, 17, 17, 0.45),
        rgba(0, 0, 0, 0.81)
      ),
      url(${aboutImage});
    background-size: cover;
    background-position: center;
    padding-bottom: 4rem;

    .image-box {
      display: none;
    }
    .right {
      align-items: center;
      text-align: center;
    }
    .text {
      margin-bottom: 1rem;
      max-width: 95%;
      font-size: 1.4rem;
    }
    /*   .highlight {
      margin-bottom: 1rem;
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
    }
  }
  @media (max-width: 27rem) {
    .highlight {
      font-size: 1.3rem;
    }
  }
`;

export default Wrapper;
