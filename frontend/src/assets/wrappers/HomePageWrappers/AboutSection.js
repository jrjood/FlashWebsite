import styled from 'styled-components';
import aboutImage from '../../../assets/images/backgrounds/HomePageImages/about-bg.jpg';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  background: linear-gradient(170deg, #020906ff 0%, #244937ff 100%);
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
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 2rem;
    max-width: 90rem;
    /* text-shadow: 2px 2px 3px rgb(0, 0, 0); */
  }
  .highlight {
    font-size: 1.3rem;
    color: var(--primary-300);
    /* font-family: 'Rama Gothic M'; */
    margin-bottom: 2.5rem;
  }

  @media (max-width: 64rem) {
    gap: 1.5rem;

    .image-box {
      width: 45%;
      height: 40rem;
    }

    .logo {
      width: 60%;
      max-width: 35rem;
      padding-bottom: 1.5rem;
    }

    .right {
      padding: 1.5rem;
    }

    .text {
      font-size: 0.95rem;
    }

    .highlight {
      font-size: 1.2rem;
    }
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
    padding: 3rem 1rem;
    gap: 0;

    .image-box {
      display: none;
    }

    .logo {
      width: 70%;
      max-width: 20rem;
      padding-bottom: 1.5rem;
      margin: 0 auto;
    }

    .right {
      align-items: center;
      text-align: center;
      padding: 2rem 1.5rem;
    }

    .text {
      margin-bottom: 1.5rem;
      max-width: 90%;
      font-size: 1.1rem;
    }

    .highlight {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }

    .btn {
      padding: 0.75rem 2rem;
    }
  }

  @media (max-width: 44rem) {
    padding: 2.5rem 1rem;

    .text {
      font-size: 1rem;
    }

    .right {
      gap: 1rem;
      padding: 1.5rem 1rem;
    }
  }

  @media (max-width: 36rem) {
    padding: 2rem 1rem;

    .logo {
      width: 75%;
      max-width: 18rem;
      padding-bottom: 1rem;
    }

    .right {
      padding: 1rem;
    }

    .text {
      font-size: 0.95rem;
      margin-bottom: 1rem;
      max-width: 95%;
    }

    .highlight {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
    }

    .btn {
      padding: 0.65rem 1.5rem;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 27rem) {
    padding: 1.5rem 0.5rem;

    .logo {
      width: 80%;
      max-width: 15rem;
    }

    .right {
      padding: 0.75rem;
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
