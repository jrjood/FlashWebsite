import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f8f9fa;

  .leads-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
  }

  .leads-header {
    margin-bottom: 2rem;

    h1 {
      font-size: 2rem;
      color: #1a1a1a;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      color: #666;
      font-size: 1rem;
    }
  }

  .tabs-container {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 0;
  }

  .tab {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
    background: transparent;
    border: none;
    border-bottom: 3px solid transparent;
    font-size: 1rem;
    font-weight: 500;
    color: #666;
    cursor: pointer;
    transition: all 0.2s;
    margin-bottom: -2px;

    &:hover {
      color: var(--primary-500);
      background: rgba(0, 0, 0, 0.02);
    }

    &.active {
      color: var(--primary-500);
      border-bottom-color: var(--primary-500);
    }

    .tab-icon {
      font-size: 1.2rem;
    }
  }

  .tab-content {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }

  .leads-section {
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;

      h2 {
        font-size: 1.5rem;
        color: #1a1a1a;
      }

      .filter-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        label {
          font-weight: 500;
          color: #666;
        }

        select {
          padding: 0.5rem 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 0.9rem;
          cursor: pointer;

          &:focus {
            outline: none;
            border-color: var(--primary-500);
          }
        }
      }
    }

    .loading {
      text-align: center;
      padding: 3rem;
      color: #666;
      font-size: 1.1rem;
    }

    .error-container {
      text-align: center;
      padding: 3rem;

      .error-message {
        color: #d32f2f;
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }

      .retry-btn {
        padding: 0.75rem 1.5rem;
        background: var(--primary-500);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;

        &:hover {
          background: var(--primary-600);
        }
      }
    }

    .empty-state {
      text-align: center;
      padding: 3rem;
      color: #999;
      font-size: 1.1rem;
    }

    .leads-table-container {
      overflow-x: auto;
    }

    .leads-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;

      thead {
        background: #f5f5f5;

        th {
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          color: #333;
          border-bottom: 2px solid #ddd;
          white-space: nowrap;
        }
      }

      tbody {
        tr {
          border-bottom: 1px solid #eee;
          transition: background 0.2s;

          &:hover {
            background: #f9f9f9;
          }
        }

        td {
          padding: 1rem;
          vertical-align: middle;
        }
      }

      .name-cell {
        font-weight: 500;
        color: #1a1a1a;
      }

      .email-link,
      .phone-link {
        color: var(--primary-500);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      .message-cell {
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .date-cell {
        white-space: nowrap;
        color: #666;
        font-size: 0.85rem;
      }

      .cv-link {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        color: var(--primary-500);
        text-decoration: none;
        font-size: 0.9rem;

        &:hover {
          text-decoration: underline;
        }
      }

      .no-cv {
        color: #999;
        font-style: italic;
      }

      .status-dropdown {
        padding: 0.4rem 0.8rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 0.85rem;
        cursor: pointer;
        background: white;

        &:focus {
          outline: none;
          border-color: var(--primary-500);
        }
      }
    }

    .status-badge {
      display: inline-block;
      padding: 0.4rem 0.8rem;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &.status-new {
        background: #e3f2fd;
        color: #1976d2;
      }

      &.status-read {
        background: #f3e5f5;
        color: #7b1fa2;
      }

      &.status-responded {
        background: #e8f5e9;
        color: #388e3c;
      }

      &.status-pending {
        background: #fff3e0;
        color: #f57c00;
      }

      &.status-confirmed {
        background: #e8f5e9;
        color: #388e3c;
      }

      &.status-cancelled {
        background: #ffebee;
        color: #d32f2f;
      }

      &.status-completed {
        background: #e0f2f1;
        color: #00796b;
      }

      &.status-reviewing {
        background: #fff9c4;
        color: #f57f17;
      }

      &.status-shortlisted {
        background: #e1f5fe;
        color: #0277bd;
      }

      &.status-rejected {
        background: #ffebee;
        color: #c62828;
      }

      &.status-hired {
        background: #c8e6c9;
        color: #2e7d32;
      }
    }

    .results-info {
      margin-top: 1.5rem;
      text-align: center;
      color: #666;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    .leads-container {
      padding: 1rem;
    }

    .tabs-container {
      overflow-x: auto;
    }

    .tab {
      font-size: 0.9rem;
      padding: 0.75rem 1rem;
    }

    .tab-content {
      padding: 1rem;
    }

    .leads-table {
      font-size: 0.8rem;

      thead th,
      tbody td {
        padding: 0.75rem 0.5rem;
      }
    }
  }
`;

export default Wrapper;
