import styled from 'styled-components';

const Wrapper = styled.footer`
  display: grid;
  grid-template-columns: 0.4fr 1fr 0.5fr;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;

  /* background: linear-gradient(135deg, #0f5132 0%, #0a3d24 100%); */
  background: linear-gradient(150deg, #0f5132 0%, #0a3d24 50%, #000000 100%);

  /* padding-bottom: 4rem; */
  border-top: 0.1px solid rgba(255, 255, 255, 0.23);
  .social-container {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    a {
      color: var(--white);
      transition: var(--transition);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2px;
      padding: 0.3rem;
      background-color: var(--primary-100);
      color: var(--main-green);
      &:hover {
        background-color: var(--primary-400);
      }
    }
  }
  .copy-text {
    font-size: 0.7rem;
    font-family: 'Proxima-Nova', sans-serif;
    letter-spacing: 1.5px;
    font-weight: 600;
    color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: end;
    max-width: 20rem;
    text-align: right;
    line-height: 1.2;
  }
  .copyrights {
    font-size: 0.6rem;
  }
  .designer-link {
    color: #ff0080;
    margin-left: 0.2rem;
    cursor: pointer;
  }
  .logo {
    display: flex;
    align-items: start;
    width: 70%;
    min-width: 10.125rem;
    max-width: 25rem;
    margin-bottom: 0.5rem;
  }

  /*   @media (max-width: 52.5rem) {
    .copy-text {
      max-width: 12rem;
    }
    .developed-by {
      max-width: 20rem;
      line-height: 1.2;
    }
  } */
  @media (max-width: 48rem) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .social-container {
      align-items: center;
    }

    .copy-text {
      text-align: center;
      font-size: 0.6rem;
    }

    .designer-link {
      align-self: center;
    }

    .developed-by {
      max-width: 20rem;
      line-height: 1.2;
    }
  }
`;
export default Wrapper;
