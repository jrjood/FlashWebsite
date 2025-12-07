import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  .filter-toggle-btn {
    background: #fff;
    border: 1px solid #d0d0d0;
    border-radius: 6px;
    padding: 0.6rem 1rem;
    font-size: 0.9375rem;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.2s;
    min-width: 160px;
    justify-content: space-between;

    &:hover {
      border-color: #0066cc;
      background: #f8f9fa;
    }
  }

  .filter-badge {
    background: #0066cc;
    color: #fff;
    border-radius: 12px;
    padding: 0.125rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    min-width: 20px;
    text-align: center;
  }

  .dropdown-arrow {
    font-size: 0.75rem;
    color: #666;
    margin-left: auto;
  }

  .filter-dropdown-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    background: #fff;
    border: 1px solid #d0d0d0;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 240px;
    max-width: 320px;
    max-height: 400px;
    overflow: hidden;
    z-index: 1000;
    animation: dropdownFadeIn 0.2s ease;

    @keyframes dropdownFadeIn {
      from {
        opacity: 0;
        transform: translateY(-8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #e8e8e8;
    background: #f8f9fa;
  }

  .dropdown-title {
    font-size: 0.9375rem;
    font-weight: 600;
    color: #333;
  }

  .clear-btn {
    background: none;
    border: none;
    color: #0066cc;
    cursor: pointer;
    font-size: 0.8125rem;
    padding: 0.25rem 0.5rem;
    transition: color 0.2s;
    font-weight: 500;

    &:hover {
      color: #004999;
      text-decoration: underline;
    }
  }

  .filter-options {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.5rem;
    max-height: 320px;
    overflow-y: auto;

    /* Custom scrollbar */
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: #c0c0c0;
      border-radius: 4px;

      &:hover {
        background: #a0a0a0;
      }
    }
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    transition: background-color 0.2s;
    border-radius: 4px;
    user-select: none;

    &:hover {
      background-color: #f5f5f5;
    }

    input[type='checkbox'] {
      width: 18px;
      height: 18px;
      margin-right: 0.75rem;
      cursor: pointer;
      accent-color: #0066cc;
      flex-shrink: 0;

      &:checked + .checkbox-text {
        color: #333;
        font-weight: 500;
      }
    }
  }

  .checkbox-text {
    font-size: 0.9375rem;
    color: #555;
    line-height: 1.4;
  }

  .no-options {
    padding: 1rem;
    text-align: center;
    color: #999;
    font-size: 0.875rem;
  }

  @media (max-width: 48rem) {
    .filter-toggle-btn {
      min-width: 140px;
      font-size: 0.875rem;
      padding: 0.5rem 0.875rem;
    }

    .filter-dropdown-menu {
      min-width: 220px;
    }

    .dropdown-title {
      font-size: 0.875rem;
    }

    .checkbox-text {
      font-size: 0.875rem;
    }
  }
`;

export default Wrapper;
