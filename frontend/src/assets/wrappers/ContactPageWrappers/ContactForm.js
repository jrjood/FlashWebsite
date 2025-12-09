import styled from 'styled-components';

const Wrapper = styled.section`
  background: linear-gradient(135deg, #0f5132 0%, #0a3d24 50%, #000000 100%);
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
    text-transform: uppercase;
  }

  .contact-form {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
    width: 80vw;
  }

  .left-fields,
  .right-fields {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
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

  .contact-form button {
    align-self: center;
    min-width: 200px;
  }

  @media (max-width: 64rem) {
    .contact-form {
      width: 90vw;
    }
  }

  @media (max-width: 48rem) {
    padding: 2rem 1.5rem;

    .form-title {
      font-size: 1.75rem;
      align-self: center;
      text-align: center;
    }

    .contact-form {
      flex-direction: column;
      width: 100%;
      gap: 1.5rem;
    }

    .left-fields,
    .right-fields {
      gap: 1rem;
    }

    .contact-form button {
      width: 100%;
      min-width: unset;
    }
  }

  @media (max-width: 30rem) {
    padding: 1.5rem 1rem;

    .form-title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .contact-form input,
    .contact-form textarea {
      font-size: 0.8125rem;
    }

    .btn-container {
      padding-bottom: 2rem;
    }
  }

  /* Make the date input feel clickable and adapt to dark bg */
  .contact-form input[type='date'] {
    cursor: pointer;
    color-scheme: dark; /* dark picker in supported browsers */
  }

  /* Text inside the date field (WebKit) */
  .contact-form input[type='date']::-webkit-datetime-edit {
    color: var(--white);
  }

  /* Hide spinners on some platforms (optional) */
  .contact-form input[type='date']::-webkit-inner-spin-button {
    display: none;
  }

  /* Calendar icon styling (Chromium/WebKit) */
  .contact-form input[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    /* Turn the default dark icon to light to match your dark background */
    filter: invert(0);
    opacity: 0.9;
  }

  /* Firefox date icon button */
  .contact-form input[type='date']::-moz-focus-inner {
    border: 0;
  }
  .contact-form input[type='date']::-moz-calendar-picker-indicator {
    filter: invert(1);
  }

  /* Optional: clearer hover/focus for all inputs */
  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: var(--white);
    box-shadow: 0 2px 0 0 var(--white);
  }

  /* Upload box look */
  .file-upload-box {
    border: 2px dashed var(--primary-400);
    border-radius: var(--border-radius);
    background-color: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    text-align: center;
    font-size: 0.95rem;
    color: var(--white);
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 140px;
    position: relative;
  }

  /* Drag visual feedback */
  .file-upload-box.drag-over {
    background-color: rgba(255, 255, 255, 0.12);
    border-color: var(--white);
  }

  /* Hide the native input but keep it interactive */
  .file-upload-box input[type='file'] {
    opacity: 0;
    position: absolute;
    inset: 0; /* top/right/bottom/left: 0 */
    cursor: pointer;
  }

  /* Text color to your brand beige */
  .file-upload-text {
    pointer-events: none;
    color: var(--beige-primary);
    font-weight: 500;
  }

  /* Filename + remove link */
  .file-meta {
    margin-top: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.9rem;
    color: var(--beige-primary);
  }

  .file-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }

  .file-remove {
    background: transparent;
    border: 1px solid var(--beige-primary);
    color: var(--beige-primary);
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    cursor: pointer;
    transition: var(--transition);
  }

  .file-remove:hover {
    background: var(--beige-primary);
    color: var(--main-green); /* contrasts your dark bg */
  }

  /* (Optional) small helper text style if you add it later */
  .file-hint {
    margin-top: 0.25rem;
    font-size: 0.8rem;
    color: var(--beige-faded);
  }

  /* Mobile */
  @media (max-width: 48rem) {
    .file-upload-box {
      min-height: 120px;
      padding: 1.5rem;
    }
  }

  .btn-container {
    align-self: center;
    padding-bottom: 4rem;
  }
  .back-btn {
    padding: 0;
    background-color: transparent;
    color: var(--primary-300);
    text-decoration: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    transition: all 0.3s;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      border: none;
      border-bottom: 1px solid transparent;
    }
  }

  /* Modal Overlay Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    backdrop-filter: blur(4px);
    animation: fadeIn 0.2s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .modal-content {
    background: white;
    border-radius: 16px;
    padding: 2.5rem;
    max-width: 450px;
    width: 90%;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s ease-out;
    position: relative;
  }

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .modal-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 3rem;
    font-weight: bold;
  }

  .modal-icon.success {
    background: linear-gradient(135deg, #0f5132 0%, #1a7f4f 100%);
    color: white;
  }

  .modal-icon.error {
    background: linear-gradient(135deg, #c53030 0%, #e53e3e 100%);
    color: white;
  }

  .modal-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 1rem;
  }

  .modal-message {
    font-size: 1rem;
    color: #718096;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .modal-close-btn {
    padding: 0.875rem 2.5rem;
    background: linear-gradient(135deg, #0f5132 0%, #1a7f4f 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(15, 81, 50, 0.3);
  }

  .modal-close-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(15, 81, 50, 0.4);
  }

  .modal-close-btn:active {
    transform: translateY(0);
  }

  @media (max-width: 48rem) {
    .modal-content {
      padding: 2rem 1.5rem;
      max-width: 90%;
    }

    .modal-icon {
      width: 64px;
      height: 64px;
      font-size: 2.5rem;
    }

    .modal-title {
      font-size: 1.5rem;
    }

    .modal-message {
      font-size: 0.9375rem;
    }
  }
`;

export default Wrapper;
