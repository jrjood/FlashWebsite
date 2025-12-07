import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Rubik';
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%);

  .dashboard-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    padding: 1.5rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .dashboard-header .logo {
    max-width: 150px;
    height: auto;
  }

  .user-section {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .welcome-text {
    font-size: 0.9375rem;
    color: #4a5568;
    font-weight: 500;
  }

  .logout-btn {
    padding: 0.625rem 1.25rem;
    background: #e53e3e;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .logout-btn:hover {
    background: #c53030;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(229, 62, 62, 0.3);
  }

  .dashboard-content {
    text-align: center;
    margin-bottom: 3rem;
  }

  .dashboard-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 0.75rem;
  }

  .dashboard-subtitle {
    font-size: 1.125rem;
    color: #718096;
    margin-bottom: 3rem;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .dashboard-card {
    background: white;
    border-radius: 16px;
    padding: 2.5rem 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .dashboard-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #0f5132 0%, #1a7f4f 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .dashboard-card:hover::before {
    transform: scaleX(1);
  }

  .dashboard-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  .card-icon {
    width: 64px;
    height: 64px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    transition: transform 0.3s ease;
  }

  .dashboard-card:hover .card-icon {
    transform: scale(1.1);
  }

  .card-icon svg {
    width: 36px;
    height: 36px;
  }

  .projects-icon {
    background: linear-gradient(135deg, #0f5132 0%, #1a7f4f 100%);
    color: white;
  }

  .posts-icon {
    background: linear-gradient(135deg, #0a3d24 0%, #0f5132 100%);
    color: white;
  }

  .leads-icon {
    background: linear-gradient(135deg, #0f5132 0%, #1a7f4f 100%);
    color: white;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 1rem;
  }

  .card-description {
    font-size: 0.9375rem;
    color: #718096;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .card-arrow {
    font-size: 1.5rem;
    color: #0f5132;
    font-weight: 700;
    transition: transform 0.3s ease;
  }

  .dashboard-card:hover .card-arrow {
    transform: translateX(8px);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .dashboard-container {
      padding: 1rem;
    }

    .dashboard-header {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }

    .dashboard-title {
      font-size: 2rem;
    }

    .dashboard-subtitle {
      font-size: 1rem;
    }

    .cards-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .dashboard-card {
      padding: 2rem 1.5rem;
    }
  }
`;

export default Wrapper;
