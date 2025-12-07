import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 2rem;
  position: relative;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* z-index: -3; */
  }
  .content {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 80%;
    margin: 0 auto;
    /* padding: 0 2rem; */
    gap: 2rem;
    /* flex-wrap: wrap; */
    color: var(--white);
    z-index: 2;
  }
  .left {
    /* flex-direction: column; */
    font-size: 4rem;
    font-weight: bold;
    color: var(--primary-300);
    line-height: 1;
    text-transform: uppercase;
  }
  .info {
    font-size: 4rem;
    line-height: 0.8;
    font-weight: 550;
    text-align: center;
    h2 {
      white-space: nowrap;
    }
  }
  .right {
    flex-direction: column;
    align-items: center;
    display: flex;
    justify-content: center;

    p {
      font-weight: 500;
      max-width: 63rem;
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      text-align: center;

      /* text-shadow: 2px 2px 3px rgb(0, 0, 0); */
    }
  }

  @media (max-width: 64rem) {
    padding: 0 1.5rem;

    .info {
      font-size: 3.5rem;
    }

    .right {
      p {
        font-size: 0.95rem;
        max-width: 55rem;
      }
    }
  }

  @media (max-width: 52.5rem) {
    padding-top: 3rem;

    .info {
      font-size: 3.2rem;
    }

    .right {
      p {
        font-size: 0.9rem;
        max-width: 50rem;
      }
    }
  }

  @media (max-width: 48rem) {
    margin: 0 auto;
    padding: 2rem 1rem;

    .info {
      font-size: 3rem;
      line-height: 1.1;
    }

    .content {
      padding: 0;
      gap: 1.5rem;
    }

    .right {
      p {
        font-size: 0.95rem;
        margin-bottom: 1.5rem;
        max-width: 90%;
      }
    }
  }

  @media (max-width: 44rem) {
    .content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1.5rem;
    }

    .right {
      align-items: center;
    }

    .info {
      max-width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.75rem;
      text-align: center;
      font-size: 2.8rem;

      h2 {
        white-space: normal;
      }
    }

    .right {
      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 36rem) {
    padding: 1.5rem 1rem;

    .info {
      font-size: 2.5rem;
      gap: 0.5rem;
    }

    .right {
      p {
        font-size: 0.85rem;
      }
    }

    .btn {
      padding: 0.65rem 1.5rem;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 27rem) {
    padding: 1rem 0.75rem;

    .info {
      font-size: 2rem;
    }

    .right {
      p {
        font-size: 0.8rem;
        margin-bottom: 1rem;
      }
    }

    .btn {
      padding: 0.6rem 1.25rem;
      font-size: 0.85rem;
    }
  }
`;

export default Wrapper;
