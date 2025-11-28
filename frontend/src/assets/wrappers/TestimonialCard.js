import styled from 'styled-components';

const Wrapper = styled.div`
  background: #111;
  border-radius: var(--border-radius);
  padding: 2rem 1rem;
  text-align: center;
  height: 23.2rem;
  margin-bottom: 3rem;
  .client-image {
    width: 5.7rem;
    height: 5.7rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  .client-name {
    margin: 0.5rem 0 0;
    color: #e6e6e6;
    font-family: 'Rama Gothic M', sans-serif !important;
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
  }
  .client-role {
    color: #aaa;
    margin: 0;
    font-size: 0.9rem;
    text-transform: uppercase;
  }
  .stars {
    margin: 1rem 0;
    color: gold;
  }
  .feedback {
    font-style: italic;
    color: #ddd;
  }
  @media (max-width: 14rem) {
    .feedback {
      font-size: 0.7rem;
    }
    .stars {
      margin: 1rem 0;
      color: gold;
      font-size: 0.7rem;
    }
  }
`;

export default Wrapper;
