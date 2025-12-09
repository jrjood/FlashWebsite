import styled from 'styled-components';

const Wrapper = styled.section`
  /* background: radial-gradient(circle, #0e281b 0%, #000000 100%); */
  /* background-color: var(--main-green); */

  position: relative;
  color: var(--white);
  width: 100%;
  height: fit-content;
  /* border-bottom: 0.1rem solid var(--main-green); */

  .content {
    display: grid;
    grid-template-columns: 30% 30%;
    justify-content: center;
    justify-items: center;
    gap: 2rem;
  }
  .title {
    color: var(--black);
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
    border: 0.2rem solid grey;

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
        width: 80%;
      }

      .card-text {
        position: absolute;
        top: 0%;
        opacity: 1;
        line-height: 1.2;
      }

      .owner-bio {
        opacity: 1;
        top: 19%;
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
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.92) 25%,
      rgba(0, 0, 0, 0.85) 50%,
      rgba(0, 0, 0, 0.34) 75%,
      rgba(0, 0, 0, 0.01) 100%
    );
  }

  .owner-img {
    height: 68vh;
    width: 25vw;
    object-fit: cover;
    transition: all 0.5s ease-in-out;
    transform: scale(1.05);
  }

  .img-text {
    position: absolute;
    top: 85%;

    /* left: 3%; */
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0 1rem;
    width: 100%;
  }
  .owner-title {
    /* font-size: 2.5rem; */
    font-size: 0.9rem;
    transition: all 0.35s ease-in-out;
  }

  .owner-name {
    /* line-height: 1.3; */
    /* opacity: 0; */
    font-family: 'RUBIK';
    transition: all 0.4s ease-in-out;
    font-weight: 600;
    font-size: 1.1rem;
  }
  .owner-bio {
    position: absolute;
    opacity: 0;
    font-size: 0.7rem;
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

  @media (max-width: 75rem) {
    .content {
      grid-template-columns: 35% 35%;
      gap: 1.5rem;
    }

    .owner-img {
      height: 60vh;
      width: 28vw;
    }

    .img-box {
      &:hover {
        .owner-bio {
          top: 20%;
        }
      }
    }
  }

  @media (max-width: 62rem) {
    .content {
      grid-template-columns: 40% 40%;
      gap: 1rem;
    }

    .owner-img {
      height: 55vh;
      width: 32vw;
    }

    .owner-name {
      font-size: 1rem;
    }

    .owner-title {
      font-size: 0.85rem;
    }

    .owner-bio {
      font-size: 0.65rem;
    }
  }

  @media (max-width: 48rem) {
    .content {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 1rem;
    }

    .owner-img {
      height: 70vh;
      width: 52vw;
      max-width: 400px;
    }

    .img-box {
      margin: 0 auto;
    }

    .owner-name {
      font-size: 1.2rem;
    }

    .owner-title {
      font-size: 0.95rem;
    }

    .owner-bio {
      font-size: 0.75rem;
    }

    .img-text {
      padding: 0 1.25rem;
    }
  }

  @media (max-width: 36rem) {
    .content {
      gap: 1.5rem;
      padding: 0 0.5rem;
    }

    .owner-img {
      height: 60vh;
      width: 62vw;
    }

    .owner-name {
      font-size: 1.1rem;
    }

    .owner-title {
      font-size: 0.85rem;
    }

    .owner-bio {
      font-size: 0.7rem;
    }

    .img-text {
      padding: 0 1rem;
    }

    .img-box {
      border-width: 0.2rem;
    }
  }

  @media (max-width: 27rem) {
    .content {
      gap: 1rem;
    }

    .owner-img {
      height: 55vh;
      width: 70vw;
    }

    .owner-name {
      font-size: 1rem;
    }

    .owner-title {
      font-size: 0.8rem;
    }

    .owner-bio {
      font-size: 0.65rem;
    }

    .img-text {
      padding: 0 0.75rem;
      gap: 0.3rem;
    }

    .separator {
      height: 4px;
    }
  }
`;

export default Wrapper;
