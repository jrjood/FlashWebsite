import styled, { keyframes } from 'styled-components';

const scrollLTR = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const scrollRTL = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50%);
  }
`;

const Wrapper = styled.section`
  background-color: var(--primary-300);
  overflow: hidden;

  .carousel-container {
    flex-direction: column;
  }

  .title {
    color: var(--black);
    align-self: flex-start;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .btn-with-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
  }

  .btn-container {
    align-self: center;
  }

  .btn {
    padding: 0;
    background: transparent !important;
    color: var(--black);
    text-decoration: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    transition: all 0.3s;
    &:hover {
      border: none;
      border-bottom: 1px solid transparent;
    }
  }

  .logo-track-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 1.5rem 0;

    /* Fade edges */
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 150px;
      height: 100%;
      z-index: 2;
      pointer-events: none;
    }

    &::before {
      left: 0;
      background: linear-gradient(
        to right,
        var(--primary-300) 0%,
        transparent 100%
      );
    }

    &::after {
      right: 0;
      background: linear-gradient(
        to left,
        var(--primary-300) 0%,
        transparent 100%
      );
    }
  }

  .logo-track {
    display: flex;
    gap: 4rem;
    animation: ${(props) => (props.$isRTL ? scrollRTL : scrollLTR)} 30s linear
      infinite;
    width: max-content;

    &:hover {
      animation-play-state: paused;
    }
  }

  .logo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    user-select: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0.7;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }

    img {
      width: 6rem;
      height: 6rem;
      object-fit: contain;
      filter: grayscale(100%);
      transition: filter 0.3s ease;
    }

    &:hover img {
      filter: grayscale(0%);
    }
  }

  @media (max-width: 48rem) {
    .logo-track {
      gap: 3rem;
      animation-duration: 25s;
    }

    .logo-item img {
      width: 5rem;
      height: 5rem;
    }

    .logo-track-container {
      &::before,
      &::after {
        width: 80px;
      }
    }
  }

  @media (max-width: 30rem) {
    .logo-track {
      gap: 2.5rem;
      animation-duration: 20s;
    }

    .logo-item img {
      width: 4.5rem;
      height: 4.5rem;
    }

    .btn-with-title {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }

    .btn-container {
      align-self: flex-start;
    }
  }
`;

export default Wrapper;
