import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: var(--black);
  padding: 3.75rem 2.5rem;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-title {
    color: var(--primary-400);
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    align-self: flex-start;
  }

  .contact-form {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
    flex-direction: column;
    width: 80vw;
  }

  .radio-group {
    display: flex;
    gap: 1.875rem;
  }

  .radio-group label {
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input[type='radio'] {
    accent-color: var(--primary-400); /* modern browsers only */
    width: 1.25rem !important;
    height: 1.25rem !important;
    cursor: pointer;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem 2.5rem;
  }

  .contact-form input,
  .contact-form textarea {
    background: transparent;
    color: var(--white);
    outline: none;
    border: none;
    border-bottom: 2px solid var(--primary-400);
    padding: 0.625rem 0.3125rem;
    font-size: 0.875rem;
    width: 100%;
    transition: var(--transition);
  }
  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: var(--white);
  }
  .contact-form textarea {
    border: 2px solid var(--primary-400);
    border-radius: var(--border-radius);
    resize: vertical;
    width: 100%;
  }

  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: rgba(201, 201, 201, 0.7);
    text-transform: uppercase;
    font-size: 0.75rem;
  }

  .upload-group {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
  }

  .upload-label {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0.6875rem 0;
    border-bottom: 2px solid var(--primary-400);
  }
  .label-title {
    padding-right: 1.7rem;
  }

  .upload-label input {
    display: none;
  }

  .upload-icon {
    position: absolute;
    right: 0;
    top: 0.5rem;
    font-size: 1.125rem;
    color: var(--primary-400);
  }

  .or-text {
    position: relative;
  }

  .or-text p {
    position: absolute;
    font-size: 0.75rem;
    color: #cfcfcf;
    left: 0;
    top: 0.625rem;
  }

  .email {
    color: var(--primary-400);
    font-weight: bold;
  }

  .full-width {
    grid-column: 1 / 3;
  }
  .btn {
    justify-self: flex-end;
  }

  @media (max-width: 48rem) {
    .form-grid {
      display: flex;
      align-items: center;
      flex-direction: column;
      flex-wrap: wrap;
    }
    .full-width {
      grid-column: 1 / 1;
    }
    @media (max-width: 11.5rem) {
      .or-text p {
        font-size: 0.5rem;
      }
    }
  }
`;

export default Wrapper;
