import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f7fafc;

  .hero-section {
    background: linear-gradient(360deg, #185d3dff 0%, #0a3d24 50% 100%);
    padding: 6rem 2rem 4rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .hero-title {
    font-size: 3rem;
    font-weight: 700;
    color: white;
    margin: 0 0 1rem 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
    line-height: 1.6;
  }

  .blog-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .post-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.3s;
    cursor: pointer;
  }

  .post-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(15, 81, 50, 0.15);
  }

  .post-card-image {
    width: 100%;
    height: 240px;
    object-fit: cover;
    background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%);
  }

  .post-card-content {
    padding: 1.5rem;
  }

  .post-card-meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    color: #718096;
  }

  .post-card-author,
  .post-card-date {
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }

  .post-card-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0 0 0.75rem 0;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .post-card-excerpt {
    font-size: 0.9375rem;
    color: #4a5568;
    line-height: 1.6;
    margin: 0 0 1rem 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .post-card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .post-tag {
    padding: 0.25rem 0.75rem;
    background: #f0fdf4;
    color: #0f5132;
    border-radius: 4px;
    font-size: 0.8125rem;
    font-weight: 600;
  }

  .post-card-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #0f5132;
    font-weight: 600;
    font-size: 0.9375rem;
    text-decoration: none;
    transition: gap 0.2s;
  }

  .post-card-link:hover {
    gap: 0.75rem;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
  }

  .pagination-btn {
    padding: 0.75rem 1.5rem;
    background: white;
    color: #0f5132;
    border: 2px solid #0f5132;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .pagination-btn:hover:not(:disabled) {
    background: #0f5132;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(15, 81, 50, 0.3);
  }

  .pagination-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .pagination-info {
    font-size: 1rem;
    font-weight: 600;
    color: #2d3748;
  }

  .empty-state {
    text-align: center;
    padding: 4rem 2rem;
  }

  .empty-state h2 {
    font-size: 2rem;
    color: #2d3748;
    margin-bottom: 1rem;
  }

  .empty-state p {
    font-size: 1.125rem;
    color: #718096;
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1rem;
    }

    .posts-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .blog-container {
      padding: 2rem 1rem;
    }

    .pagination {
      flex-direction: column;
    }

    .pagination-btn {
      width: 100%;
    }
  }
`;

export default Wrapper;
