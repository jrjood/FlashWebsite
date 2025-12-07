// src/assets/wrappers/HomePageWrappers/ServicesSection.js
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  background-color: #050505;
  /* text-align: center; */

  .container {
    position: relative;
    z-index: 2;
    padding-block: 2rem 3rem;
    padding-top: 0;
  }

  .section-container {
    padding: 2rem 2rem;
  }

  .title {
    color: var(--white);
    /* text-align: left; */
    margin-bottom: 1.25rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.25rem;
    width: 100%;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    padding: 1.5rem 1rem;
    min-height: 9rem;
    width: 100%;
    cursor: pointer;
    /* background: rgba(255, 255, 255, 0.82); */
    background-color: var(--primary-300);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    transition: transform 160ms ease, box-shadow 160ms ease,
      background 160ms ease;

    .card-icon {
      color: var(--primary-700);
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }

    .line-highlight {
      width: 56px;
      height: 4px;
      border-radius: 2px;
      background: var(--primary-700);
      margin-bottom: 0.9rem;
      transition: background 160ms ease;
    }

    .card-title {
      color: #0d1b14;
      font-weight: 800;
      letter-spacing: 0.2px;
      font-size: 1.05rem;
      text-transform: uppercase;
      text-align: center;
    }

    &:hover,
    &:focus-visible {
      transform: translateY(-2px);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
      background: rgba(255, 255, 255, 0.95);
      outline: none;

      .line-highlight {
        background: var(--primary-800);
      }

      .card-icon {
        color: var(--primary-800);
      }
    }
  }

  @media (max-width: 75rem) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 48rem) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 30rem) {
    .grid {
      grid-template-columns: 1fr;
    }
    .card {
      min-height: 9.5rem;
    }
  }
`;

export default Wrapper;
