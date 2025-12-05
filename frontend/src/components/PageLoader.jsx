import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const PageLoader = () => {
  return (
    <Wrapper>
      <div className='loader-content'>
        <div className='logo-container'>
          <Logo isSticky={true} />
        </div>
        <div className='spinner'></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    135deg,
    #bec4c1ff 0%,
    #bfc5c2ff 50%,
    #ffffffff 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  animation: fadeIn 0.3s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &.fade-out {
    animation: fadeOut 0.5s ease-out forwards;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .loader-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 150px;
    animation: pulse 2s ease-in-out infinite;
    img {
      max-width: 12rem;
    }
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }

  .spinner {
    width: 30px;
    height: 30px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #0f5132;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    .logo-container {
      max-width: 120px;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border-width: 3px;
    }
  }
`;

export default PageLoader;
