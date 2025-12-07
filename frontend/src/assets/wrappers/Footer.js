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
    font-size: 1rem;
    a {
      color: var(--white);
      transition: var(--transition);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1px;
      padding: 0.3rem;
      background-color: var(--primary-100);
      color: var(--main-green);
      &:hover {
        color: var(--white);
      }

      background-color: rgba(255, 255, 255, 1);
    }
    .facebook {
      /* background-color: rgba(255, 255, 255, 1); */
    }
    .whatsapp {
      /* background-color: rgba(255, 255, 255, 1); */
    }
    .instagram {
      /* background-color: rgba(255, 255, 255, 1); */
    }
    .linkedin {
      background-color: rgba(255, 255, 255, 1);
    }
    .facebook:hover {
      background-color: #1255adff;
    }
    .whatsapp:hover {
      background-color: #1b9548ff;
    }
    .instagram:hover {
      background-color: #b11f5cff;
    }
    .linkedin:hover {
      background-color: #0077b5;
    }
  }
  .copy-text {
    font-size: 0.7rem;
    font-family: 'Rubik', sans-serif;
    letter-spacing: 1.5px;
    /* font-weight: 600; */
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

  @media (max-width: 64rem) {
    grid-template-columns: 0.3fr 1fr 0.4fr;
    padding: 0 1.5rem;

    .logo {
      width: 100%;
      max-width: 12rem;
    }

    .copy-text {
      max-width: 15rem;
      font-size: 0.65rem;
    }
  }

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1.5rem;
    text-align: center;

    .logo {
      width: 60%;
      max-width: 15rem;
      margin: 0 auto;
      justify-content: center;
    }

    .social-container {
      align-items: center;
      order: 2;
    }

    .social-icons {
      justify-content: center;
      gap: 1.5rem;
      font-size: 1.25rem;

      a {
        padding: 0.5rem;
      }
    }

    .copy-text {
      text-align: center;
      font-size: 0.65rem;
      max-width: 100%;
      align-items: center;
    }

    .developed-by {
      max-width: 100%;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
    }

    .copyrights {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 30rem) {
    padding: 1.5rem 1rem;
    gap: 1.5rem;

    .logo {
      width: 70%;
      max-width: 10rem;
    }

    .social-icons {
      gap: 1rem;
      font-size: 1rem;

      a {
        padding: 0.4rem;
      }
    }

    .copy-text {
      font-size: 0.6rem;
    }

    .copyrights {
      font-size: 0.55rem;
    }

    .developed-by p {
      margin: 0.25rem 0;
    }
  }
`;
export default Wrapper;
