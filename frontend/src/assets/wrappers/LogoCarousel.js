import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: var(--primary-300);
  .carousel-container {
    flex-direction: column;
    /* gap: 2rem; */
  }

  .logo-container {
    width: 100%;
    padding-bottom: 0.5rem;
    cursor: grab;
  }
  .title {
    color: #050505;
    align-self: flex-start;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  .btn-container {
    align-self: flex-end;
  }

  .logo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none; /* prevent text‐select while dragging */
    img {
      width: 5.5rem;
      height: 5.5rem;
      object-fit: contain;
    }
  }
  .btn-with-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  .btn-container {
    align-self: center;
  }
  .btn {
    padding: 0;
    background: transparent !important;
    color: #050505;
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

  @media (max-width: 36rem) {
    .logo-item {
      img {
        width: 5rem;
        height: 5rem;
      }
    }
  }
`;

export default Wrapper;
