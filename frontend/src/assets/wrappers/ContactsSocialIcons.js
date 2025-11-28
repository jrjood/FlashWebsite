import styled from 'styled-components';
import bgImage from '../images/backgrounds/Inspiration-bg.svg'; // background image
import bgImage2 from '../images/backgrounds/Inspiration-bg2.svg'; // background image

const Wrapper = styled.section`
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--primary-300);
  /* background-image: ${(p) =>
    p.$rtl ? `url(${bgImage2})` : `url(${bgImage})`}; */
  /* background-repeat: no-repeat; */
  /* ✅ the important bit: bind to a prop so it always wins */
  /* background-position-x: ${(p) => (p.$rtl ? '2%' : '98%')}; */
  /* background-size: contain; */
  border-bottom: 0.1rem solid var(--main-green);
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  .container {
    width: 100%;

    margin: 0 5rem;
    max-width: 60%;
  }
  .content {
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .row {
    display: flex;
    gap: 5rem;
  }
  .feature {
    padding: 3rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .title {
    color: var(--black);
    width: 25%;
    margin-bottom: 5rem;
  }

  .inspiration-no-border {
    border-top: 400px var(--black) solid;
  }
  .text-box {
    color: var(--black);
    font-size: 1.125rem;
    max-width: 62%;
    line-height: 1.5;
  }
  .quote {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--black);
    align-self: center;
  }

  //NewsletterForm style
  .newsletter-title {
    color: var(--black);
    font-family: 'Rama Gothic M';
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 20px;
  }

  .input-wrapper input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--black);
    padding: 10px 35px 10px 5px;
    font-size: 14px;
    color: var(--black);
    outline: none;
  }

  .input-wrapper input::placeholder {
    font-size: 0.8rem;
    color: #333;
  }

  .email-icon {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--white);
  }

  .send-btn {
    background-color: var(--black);
    color: var(--white);
    border: none;
    padding: 10px 25px;
    font-weight: bold;
    font-size: 13px;
    border-radius: 20px;
    cursor: pointer;
  }

  .social-icons {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    a {
      color: var(--white);
      transition: var(--transition);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2px;
      padding: 0.5rem;
    }
    .facebook {
      background-color: rgba(0, 0, 0, 0.6);
    }
    .whatsapp {
      background-color: rgba(0, 0, 0, 0.6);
    }
    .instagram {
      background-color: rgba(0, 0, 0, 0.6);
    }
    .linkedin {
      background-color: rgba(0, 0, 0, 0.6);
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

  @media (max-width: 48rem) {
    .row {
      flex-direction: column;
      gap: 2rem;
    }
    .text-box {
      max-width: 100%;
    }
    .container {
      max-width: 80%;
      margin: auto;
    }
    .title {
      margin-bottom: 0;
    }
  }
  @media (max-width: 44rem) {
    .container {
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 27rem) {
    .quote {
      font-size: 2.3rem;
    }
  }
  @media (max-width: 12.5rem) {
    .input-wrapper input::placeholder {
      font-size: 0.5rem;
    }
  }
`;

export default Wrapper;
