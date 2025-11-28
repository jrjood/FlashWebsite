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
    font-size: 6rem;
    line-height: 0.8;
    font-weight: 550;
    text-align: center;
    P {
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
      font-size: 1.35rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      text-align: center;

      /* text-shadow: 2px 2px 3px rgb(0, 0, 0); */
    }
  }

  @media (max-width: 52.5rem) {
    padding-top: 3rem;
    .info {
      font-size: 4rem;
    }
    .right {
      p {
        font-size: 1.1rem;
      }
    }
  }
  @media (max-width: 48rem) {
    margin: 0 auto;
    /* max-width: 47rem; */
    .info {
      font-size: 4.1rem;
      line-height: 1.2;
    }
    .content {
      padding: 0;
    }
  }
  @media (max-width: 44rem) {
    .content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1rem;
    }
    .right {
      align-items: center;
    }
    .info {
      max-width: 32rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      text-align: center;
      font-size: 3.8rem;
    }
    .right {
      p {
        font-size: 0.95rem;
      }
    }
  }
  @media (max-width: 36rem) {
    .info {
      font-size: 86%;
    }
  }
  @media (max-width: 27rem) {
    .info {
      font-size: 2.7rem;
    }
  }
`;

export default Wrapper;
