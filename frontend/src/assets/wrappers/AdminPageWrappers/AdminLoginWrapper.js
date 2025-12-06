import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Rubik';
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f5132 0%, #1a7f4f 100%);
  padding: 1rem;

  .login-container {
    width: 100%;
    max-width: 440px;
  }

  .login-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    padding: 3rem 2.5rem;
    animation: slideUp 0.5s ease;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .logo-section {
    text-align: center;
    margin-bottom: 2rem;
  }

  .logo-section .logo {
    max-width: 180px;
    height: auto;
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 0.9375rem;
    color: #718096;
    margin-bottom: 0;
  }

  .error-message {
    background: #fee;
    border: 1px solid #fcc;
    border-radius: 8px;
    padding: 0.875rem 1rem;
    margin-bottom: 1.5rem;
    color: #c53030;
    font-size: 0.875rem;
    text-align: center;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #2d3748;
  }

  .form-group input {
    padding: 0.875rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.2s;
    background: white;
  }

  .form-group input:focus {
    outline: none;
    border-color: #0f5132;
    box-shadow: 0 0 0 3px rgba(15, 81, 50, 0.1);
  }

  .form-group input:disabled {
    background: #f7fafc;
    cursor: not-allowed;
  }

  .form-group input::placeholder {
    color: #a0aec0;
  }

  .submit-btn {
    margin-top: 0.5rem;
    padding: 1rem;
    background: linear-gradient(135deg, #0f5132 0%, #1a7f4f 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 12px rgba(15, 81, 50, 0.4);
  }

  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(15, 81, 50, 0.5);
  }

  .submit-btn:active:not(:disabled) {
    transform: translateY(0);
  }

  .submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  .login-footer {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e2e8f0;
    text-align: center;
  }

  .login-footer p {
    font-size: 0.8125rem;
    color: #a0aec0;
    margin: 0;
  }

  /* Responsive */
  @media (max-width: 480px) {
    .login-card {
      padding: 2rem 1.5rem;
    }

    .title {
      font-size: 1.5rem;
    }

    .logo-section .logo {
      max-width: 150px;
    }
  }
`;

export default Wrapper;
