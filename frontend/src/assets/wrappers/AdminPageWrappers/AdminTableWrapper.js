import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%);

  .admin-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
  }

  .admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .header-content {
    flex: 1;
  }

  .page-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 0.5rem;
  }

  .page-subtitle {
    font-size: 0.9375rem;
    color: #718096;
    margin: 0;
  }

  .header-actions {
    display: flex;
    gap: 0.75rem;
  }

  .back-btn,
  .logout-btn {
    padding: 0.625rem 1.25rem;
    border: none;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .back-btn {
    background: #edf2f7;
    color: #4a5568;
  }

  .back-btn:hover {
    background: #e2e8f0;
    transform: translateY(-1px);
  }

  .logout-btn {
    background: #e53e3e;
    color: white;
  }

  .logout-btn:hover {
    background: #c53030;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(229, 62, 62, 0.3);
  }

  .content-section {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid #e2e8f0;
  }

  .stats {
    display: flex;
    gap: 2rem;
  }

  .stat-item {
    font-size: 0.9375rem;
    color: #718096;
  }

  .stat-item strong {
    color: #2d3748;
    font-weight: 700;
  }

  .add-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #0f5132 0%, #1a7f4f 100%);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 0.9375rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 4px 12px rgba(15, 81, 50, 0.3);
  }

  .add-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(15, 81, 50, 0.4);
  }

  .loading,
  .empty-state {
    text-align: center;
    padding: 4rem 4rem;
    color: #718096;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .empty-state p {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }

  .table-container {
    overflow-x: auto;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
  }

  .data-table thead {
    background: #f7fafc;
  }

  .data-table th {
    padding: 1rem;
    text-align: left;
    font-size: 0.875rem;
    font-weight: 600;
    color: #4a5568;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .data-table tbody tr {
    border-bottom: 1px solid #e2e8f0;
    transition: background-color 0.2s;
  }

  .data-table tbody tr:hover {
    background: #f7fafc;
  }

  .data-table td {
    padding: 1rem;
    font-size: 0.9375rem;
    color: #2d3748;
  }

  .title-cell {
    max-width: 300px;
  }

  .project-info,
  .post-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .project-thumb {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 6px;
    flex-shrink: 0;
  }

  .badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .badge-success {
    background: #d1f4e0;
    color: #0f5132;
  }

  .badge-warning {
    background: #feebc8;
    color: #7c2d12;
  }

  .badge-gray {
    background: #e2e8f0;
    color: #4a5568;
  }

  .actions-cell {
    display: flex;
    gap: 0.5rem;
  }

  .action-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    font-size: 0.8125rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    display: inline-block;
  }

  .edit-btn {
    background: #d1f4e0;
    color: #0f5132;
  }

  .edit-btn:hover {
    background: #b8ecc9;
    transform: translateY(-1px);
  }

  .delete-btn {
    background: #fed7d7;
    color: #9b2c2c;
  }

  .delete-btn:hover {
    background: #fc8181;
    transform: translateY(-1px);
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .admin-container {
      padding: 1rem;
    }

    .admin-header {
      flex-direction: column;
      gap: 1.5rem;
      align-items: flex-start;
    }

    .header-actions {
      width: 100%;
      justify-content: flex-end;
    }

    .section-header {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }

    .stats {
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    .page-title {
      font-size: 1.5rem;
    }

    .content-section {
      padding: 1rem;
    }

    .data-table {
      font-size: 0.875rem;
    }

    .data-table th,
    .data-table td {
      padding: 0.75rem 0.5rem;
    }

    .project-thumb {
      width: 40px;
      height: 40px;
    }

    .actions-cell {
      flex-direction: column;
      gap: 0.25rem;
    }

    .action-btn {
      width: 100%;
      text-align: center;
    }
  }
`;

export default Wrapper;
