import styled from 'styled-components';

const Wrapper = styled.article`
  min-height: 100vh;
  background: #f7fafc;

  .post-hero {
    position: relative;
    height: 500px;
    overflow: hidden;
    background: linear-gradient(135deg, #0f5132 0%, #1a7f4f 100%);
  }

  .post-hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
  }

  .post-hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(15, 81, 50, 0.6) 0%,
      rgba(15, 81, 50, 0.9) 100%
    );
    display: flex;
    align-items: flex-end;
    padding: 3rem 2rem;
  }

  .post-hero-content {
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
    color: white;
  }

  .post-meta {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1rem;
    font-size: 0.9375rem;
    opacity: 0.9;
  }

  .post-meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .post-title {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .post-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem 2rem;
  }

  .post-excerpt {
    font-size: 1.25rem;
    color: #4a5568;
    line-height: 1.8;
    padding: 2rem;
    background: white;
    border-left: 4px solid #0f5132;
    border-radius: 8px;
    margin-bottom: 3rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 3rem;
  }

  .post-tag {
    padding: 0.5rem 1rem;
    background: #f0fdf4;
    color: #0f5132;
    border-radius: 6px;
    font-size: 0.9375rem;
    font-weight: 600;
  }

  .post-section {
    background: white;
    border-radius: 12px;
    padding: 3rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.3s;
  }

  .post-section:hover {
    box-shadow: 0 4px 16px rgba(15, 81, 50, 0.12);
  }

  .section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #0f5132;
    margin: 0 0 1.5rem 0;
    padding-bottom: 1rem;
    border-bottom: 3px solid #f0fdf4;
  }

  .section-content {
    font-size: 1.0625rem;
    color: #2d3748;
    line-height: 1.8;
    white-space: pre-wrap;
  }

  .section-content p {
    margin: 0 0 1.5rem 0;
  }

  .section-content p:last-child {
    margin-bottom: 0;
  }

  .section-content strong {
    color: #0f5132;
    font-weight: 600;
  }

  .section-content em {
    font-style: italic;
    color: #4a5568;
  }

  .section-content ul,
  .section-content ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }

  .section-content li {
    margin-bottom: 0.75rem;
    line-height: 1.8;
  }

  .back-to-blog {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: #0f5132;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s;
    margin-top: 3rem;
  }

  .back-to-blog:hover {
    background: #1a7f4f;
    transform: translateX(-4px);
    box-shadow: 0 4px 12px rgba(15, 81, 50, 0.3);
  }

  .loading {
    text-align: center;
    padding: 4rem 2rem;
    font-size: 1.25rem;
    color: #718096;
  }

  @media (max-width: 768px) {
    .post-hero {
      height: 350px;
    }

    .post-title {
      font-size: 2rem;
    }

    .post-meta {
      flex-direction: column;
      gap: 0.5rem;
    }

    .post-container {
      padding: 2rem 1rem;
    }

    .post-section {
      padding: 2rem 1.5rem;
    }

    .section-title {
      font-size: 1.5rem;
    }

    .section-content {
      font-size: 1rem;
    }

    .post-excerpt {
      font-size: 1.0625rem;
      padding: 1.5rem;
    }
  }
`;

export default Wrapper;
