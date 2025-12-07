import styled, { keyframes } from 'styled-components';

const fadeScaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.42);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeOverlay 0.3s ease forwards;

  @keyframes fadeOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .popup-container {
    background: var(--white);
    padding: 2rem;
    border-radius: var(--border-radius);
    width: 90%;
    max-width: 43.5rem;
    height: fit-content;
    overflow: hidden;
    position: relative;
    animation: ${fadeScaleIn} 0.4s ease forwards;
    transform-origin: center;
    background-image: linear-gradient(
        to top,
        rgba(17, 17, 17, 0.16),
        rgb(0, 0, 0)
      ),
      url(${(props) => props.$background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .btn-container {
    display: flex;
    flex-direction: column;
  }
  a {
    align-self: center;
  }
  .closeBtn {
    position: absolute;
    top: 0.75rem;
    right: 1.125rem;
    background: none;
    color: var(--white);
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
  .title {
    font-size: 2rem;
    /* color: var(--black); */
  }
  .scrollContainer {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    padding-bottom: 1rem;
    scroll-behavior: smooth;
  }
  .popup-card {
    position: relative;
    overflow: hidden;
    /* height: 15rem; */
    border-radius: var(--border-radius);
  }
`;

export default Wrapper;
